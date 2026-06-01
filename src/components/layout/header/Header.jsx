import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icon from "../../../assets/img/logo.png";
import { useTranslation } from "react-i18next";
import rus from "../../../assets/icons/rus.png";
import eng from "../../../assets/icons/english.png";
import { MdClose } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import { useSearchProductsQuery } from "../../../context/api/productApi";
import { toSlug } from "../../../utils/slugHelper";
import "./header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLang = i18n.language || "eng";
  const trimmedValue = searchValue.trim();

  const { data, isLoading, isFetching, isError } = useSearchProductsQuery(
    { value: trimmedValue },
    { skip: !searchOpen || trimmedValue.length === 0 },
  );

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchValue("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!trimmedValue) return;
    navigate(`/search?value=${encodeURIComponent(trimmedValue)}`);
    closeSearch();
  };

  const getProductName = (product) =>
    currentLang === "rus"
      ? product?.translations?.ru?.name
      : product?.translations?.en?.name;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/company", label: t("Компании") },
    { to: "/razdel", label: t("Каталог") },
    { to: "/accardion", label: t("Партнеры") },
    { to: "/contact", label: t("Контакты") },
  ];

  const showResults = searchOpen && trimmedValue.length > 0;
  const isSearching = isLoading || isFetching;

  return (
    <>
      <header className={`header ${scrolled ? "header--shadow" : ""}`}>
        <div className="header__inner container">
          <NavLink to="/" className="header__logo">
            <img src={icon} alt="TRT" />
          </NavLink>

          <ul className={`header__links ${menuOpen ? "header__links--open" : ""}`}>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `header__link ${isActive ? "header__link--active" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li className="header__phone-item">
              <a className="header__phone-num" href="tel:+998712032030">
                +99871 203‑20‑30
              </a>
            </li>
          </ul>

          <div className="header__phone-desktop">
            <a className="header__phone-num" href="tel:+998712032030">
              +99871 203‑20‑30
            </a>
          </div>

          <div className="header__right">
            <button
              type="button"
              className="header__icon-btn"
              onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
              aria-label="search"
            >
              {searchOpen ? <MdClose /> : <HiOutlineSearch />}
            </button>

            <div className="header__lang" ref={dropdownRef}>
              <button
                type="button"
                className="header__lang-btn"
                onClick={() => setLangOpen((p) => !p)}
              >
                <img
                  src={currentLang === "rus" ? rus : eng}
                  alt={currentLang}
                  className="header__lang-flag"
                />
                <span>{currentLang === "rus" ? "RU" : "EN"}</span>
                <svg
                  viewBox="0 0 10 6"
                  className={`header__chevron ${langOpen ? "header__chevron--up" : ""}`}
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </button>
              {langOpen && (
                <div className="header__lang-dropdown">
                  {[
                    { lang: "rus", src: rus, label: "RU" },
                    { lang: "eng", src: eng, label: "EN" },
                  ].map(({ lang, src, label }) => (
                    <button
                      key={lang}
                      type="button"
                      className="header__lang-option"
                      onClick={() => handleLanguageChange(lang)}
                    >
                      <img src={src} alt={label} className="header__lang-flag" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" className="header__cta">
              {t("Оставить заявку")}
            </NavLink>

            <button type="button" className="header__burger" onClick={() => setMenuOpen((p) => !p)}>
              {menuOpen ? <MdClose /> : <RiMenuFill />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`header__search ${searchOpen ? "header__search--open" : ""} ${showResults ? "header__search--results" : ""
          }`}
      >
        <form className="header__search-inner container" onSubmit={handleSearchSubmit}>
          <HiOutlineSearch />
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t("Поиск продукции...")}
            autoFocus={searchOpen}
            aria-label={t("Поиск продукции...")}
          />
          <button type="button" onClick={closeSearch} aria-label="close search">
            <MdClose />
          </button>
        </form>

        {showResults && (
          <div className="header__search-results container">
            {isSearching ? (
              <p className="header__search-status">{t("Загрузка...")}</p>
            ) : isError || !data?.length ? (
              <p className="header__search-status">{t("Ничего не найдено")}</p>
            ) : (
              <>
                <ul className="header__search-list">
                  {data.map((product) => {
                    const name =
                      getProductName(product) || product?.translations?.en?.name || "";
                    const slug = toSlug(name, product.id);
                    return (
                      <li key={product.id}>
                        <NavLink
                          to={`/single/${slug}`}
                          className="header__search-item"
                          onClick={closeSearch}
                        >
                          <span className="header__search-item-name">{name}</span>
                          <span className="header__search-item-code">{product.trtCode}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

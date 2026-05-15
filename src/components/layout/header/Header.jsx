import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../../assets/img/logo.png";
import { useTranslation } from "react-i18next";
import rus from "../../../assets/icons/rus.png";
import eng from "../../../assets/icons/english.png";
import { MdClose } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import "./header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLang = i18n.language || "eng";

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

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
              <a className="header__phone-num" href="tel:+998712032030">+99871 203‑20‑30</a>
            </li>
          </ul>

          <div className="header__phone-desktop">
            <a className="header__phone-num" href="tel:+998712032030">+99871 203‑20‑30</a>
          </div>

          <div className="header__right">
            <button className="header__icon-btn" onClick={() => setSearchOpen((p) => !p)} aria-label="search">
              {searchOpen ? <MdClose /> : <HiOutlineSearch />}
            </button>

            <div className="header__lang" ref={dropdownRef}>
              <button className="header__lang-btn" onClick={() => setLangOpen((p) => !p)}>
                <img src={currentLang === "rus" ? rus : eng} alt={currentLang} className="header__lang-flag" />
                <span>{currentLang === "rus" ? "RU" : "EN"}</span>
                <svg viewBox="0 0 10 6" className={`header__chevron ${langOpen ? "header__chevron--up" : ""}`}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              </button>
              {langOpen && (
                <div className="header__lang-dropdown">
                  {[{ lang: "rus", src: rus, label: "RU" }, { lang: "eng", src: eng, label: "EN" }].map(({ lang, src, label }) => (
                    <button key={lang} className="header__lang-option" onClick={() => handleLanguageChange(lang)}>
                      <img src={src} alt={label} className="header__lang-flag" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" className="header__cta">{t("Оставить заявку")}</NavLink>

            <button className="header__burger" onClick={() => setMenuOpen((p) => !p)}>
              {menuOpen ? <MdClose /> : <RiMenuFill />}
            </button>
          </div>
        </div>
      </header>

      <div className={`header__search ${searchOpen ? "header__search--open" : ""}`}>
        <div className="header__search-inner container">
          <HiOutlineSearch />
          <input type="search" placeholder={t("Поиск продукции...")} autoFocus={searchOpen} />
          <button onClick={() => setSearchOpen(false)}><MdClose /></button>
        </div>
      </div>
    </>
  );
};

export default Header;
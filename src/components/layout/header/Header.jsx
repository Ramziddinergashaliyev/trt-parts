import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../../assets/img/logo.png";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import rus from "../../../assets/icons/rus.png";
import eng from "../../../assets/icons/english.png";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiMenuFill } from "react-icons/ri";
import "./header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [hide, setHide] = useState(false);
  const [hideSearch, setHideSearch] = useState(null);
  const dropdownRef = useRef(null);

  const currentLang = i18n.language || "rus";

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    document
      .querySelector(".custom-dropdown-options")
      ?.classList.remove("show");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        document
          .querySelector(".custom-dropdown-options")
          ?.classList.remove("show");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchClick = () => {
    setHideSearch((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <nav
          className="header__nav container"
          role="navigation"
          aria-label="header nav"
        >
          <NavLink to="/" className="header__nav__icons">
            <img src={icon} alt="TRT logotipi" />
          </NavLink>

          <ul className={`header__nav__list ${hide ? "header__nav__list-show" : ""}`}>

            <li className="header__nav__item">
              <NavLink
                onClick={() => setHide(false)}
                className="header__nav__item-link"
                to="/razdel"
              >
                {t("Каталог")}
              </NavLink>
            </li>

            <li className="header__nav__item">
              <NavLink
                onClick={() => setHide(false)}
                className="header__nav__item-link"
                to="/company"
              >
                {t("Компании")}
              </NavLink>
            </li>

            <li className="header__nav__item">
              <NavLink
                onClick={() => setHide(false)}
                className="header__nav__item-link"
                to="/accardion"
              >
                {t("Партнеры")}
              </NavLink>
            </li>

            <li className="header__nav__item">
              <NavLink
                onClick={() => setHide(false)}
                className="header__nav__item-link"
                to="/contact"
              >
                {t("Контакты")}
              </NavLink>
            </li>

            <li className="header__nav__item">
              <div className="custom-dropdown" ref={dropdownRef}>
                <button
                  className="custom-dropdown-selected"
                  aria-label="Tilni tanlash"
                  onClick={() =>
                    document
                      .querySelector(".custom-dropdown-options")
                      ?.classList.toggle("show")
                  }
                >
                  <img
                    src={currentLang === "rus" ? rus : eng}
                    alt={currentLang === "rus" ? "Русский" : "English"}
                    className="lang-icon"
                  />
                  <span>{currentLang === "rus" ? "Rus" : "English"}</span>
                </button>

                <div className="custom-dropdown-options">

                  <div
                    className="custom-dropdown-option"
                    onClick={() => handleLanguageChange("rus")}
                  >
                    <img src={rus} alt="Русский язык" className="lang-icon" />
                    Rus
                  </div>

                  <div
                    className="custom-dropdown-option"
                    onClick={() => handleLanguageChange("eng")}
                  >
                    <img
                      src={eng}
                      alt="English icon"
                      aria-hidden="true"
                      className="lang-icon"
                      loading="leazy"
                    />
                    English
                  </div>

                </div>

              </div>
            </li>

            <li className="header__nav__item-phone">
              <a className="header__nav__item-tel" href="tel:+998712032030">
                +99871 203-20-30
              </a>
            </li>

          </ul>

          <div className="header__nav__right">

            <button
              onClick={handleSearchClick}
              className="header__nav__search"
              aria-label="header search"
            >
              <FiSearch />
            </button>

            <div className="header__nav__btn">
              <button aria-label="add to contact">
                <NavLink to="/contact">{t("Оставить заявку")}</NavLink>
              </button>
            </div>

            <button
              onClick={() => setHide(!hide)}
              className="header__nav__right-menu"
              aria-label={hide ? "menu exit" : "Menu open"}>
              {hide ? <MdClose /> : <RiMenuFill />}
            </button>

          </div>
        </nav>
      </header>

      <div
        className={`header__nav__search__result ${hideSearch ? "header__nav__search__result-hide" : ""}`}
        role="search" aria-label="Sayt bo'yicha qidiruv">
        <div className="header__nav__search__result-form container">
          <CiSearch />
          <input
            placeholder={t("Поиск продукции...")}
            type="search"
            aria-label={t("Mahsulot nomi bo'yicha qidiruv")}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

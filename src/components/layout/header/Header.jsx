import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../../assets/img/logo.png";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import uzb from "../../../assets/icons/uzb.webp";
import rus from "../../../assets/icons/rus.png";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiMenuFill } from "react-icons/ri";

import "./header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("uzb");
  const dropdownRef = useRef(null);
  const [hide, setHide] = useState(false);
  const [hideSearch, setHideSearch] = useState(null);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);

    const dropdown = document.querySelector(".custom-dropdown-options");
    if (dropdown?.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setHideSearch((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav container" role="navigation" aria-label="Asosiy menyu">
          <NavLink to="/" className="header__nav__icons">
            <img src={icon} alt="TRT logotipi" />
          </NavLink>

          <ul className={`header__nav__list ${hide ? "header__nav__list-show" : ""}`}>
            <li className="header__nav__item">
              <NavLink onClick={() => setHide(false)} className="header__nav__item-link" to="/razdel">
                Каталог
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink onClick={() => setHide(false)} className="header__nav__item-link" to="/company">
                Компании
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink onClick={() => setHide(false)} className="header__nav__item-link" to="/accardion">
                Партнеры
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink onClick={() => setHide(false)} className="header__nav__item-link" to="/contact">
                Контакты
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
                  }>
                  <img
                    src={selectedLang === "rus" ? rus : uzb}
                    alt={selectedLang === "rus" ? "Русский" : "Oʻzbek"}
                    className="lang-icon"
                  />
                  <span>{t(selectedLang === "uzb" ? "Uzbek" : "Rus")}</span>
                </button>
                <div className="custom-dropdown-options">
                  <div
                    className="custom-dropdown-option"
                    onClick={() => handleLanguageChange("uzb")}>
                    <img src={uzb} alt="Uzbek tili" className="lang-icon" />
                    Uzbek
                  </div>
                  <div
                    className="custom-dropdown-option"
                    onClick={() => handleLanguageChange("rus")}>
                    <img src={rus} alt="Русский язык" className="lang-icon" />
                    Rus
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
              aria-label="Mahsulot qidiruvi">
              <FiSearch />
            </button>

            <div className="header__nav__btn">
              <button aria-label="Aloqa sahifasiga o'tish">
                <NavLink to="/contact">Оставить заявку</NavLink>
              </button>
            </div>

            <button
              onClick={() => setHide(!hide)}
              className="header__nav__right-menu"
              aria-label={hide ? "Menyuni yopish" : "Menyuni ochish"}>
              {hide ? <MdClose /> : <RiMenuFill />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`header__nav__search__result ${
          hideSearch ? "header__nav__search__result-hide" : ""
        }`}
        role="search"
        aria-label="Sayt bo'yicha qidiruv"
      >
        <div className="header__nav__search__result-form container">
          <CiSearch />
          <input
            placeholder="Поиск продукции..."
            type="search"
            aria-label="Mahsulot nomi bo'yicha qidiruv"
          />
        </div>
      </div>
    </>
  );
};

export default Header;

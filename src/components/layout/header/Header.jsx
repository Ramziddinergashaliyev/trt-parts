import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../../assets/img/logo.png";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import uzb from "../../../assets/icons/uzb.webp";
import rus from "../../../assets/icons/rus.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

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
    if (dropdown.classList.contains("show")) {
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
        <nav className="header__nav container">
          <NavLink to={"/"} className="header__nav__icons">
            <img src={icon} alt="header-icon" />
          </NavLink>
          <ul className={`header__nav__list ${hide ? "header__nav__list-show" : ""}`}>
            <li className="header__nav__item"> 
              <NavLink onClick={() => setHide(false)} className={"header__nav__item-link"} to={"/razdel"}>
                Каталог
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink onClick={() => setHide(false)} className={"header__nav__item-link"} to={"/company"} >
                Компании
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink onClick={() => setHide(false)} className={"header__nav__item-link"} to={"/accardion"}>
                Партнеры
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink onClick={() => setHide(false)} className={"header__nav__item-link"} to={"/contact"}>
                Контакты
              </NavLink>
            </li>
            {/* <li className="header__nav__item">
              <NavLink
                onClick={() => setHide(false)}
                className={"header__nav__item-link"}
                to={"/galary"}
              >
                Галарея
              </NavLink>
            </li> */}
            <li className="header__nav__item">
              <div className="custom-dropdown" ref={dropdownRef}>
                <div className="custom-dropdown-selected"
                  onClick={() =>
                    document
                      .querySelector(".custom-dropdown-options")
                      .classList.toggle("show")
                  }
                >
                  <img
                    src={selectedLang === "rus" ? rus : uzb}
                    alt={selectedLang}
                    className="lang-icon"
                  />
                  <span>{t(selectedLang === "uzb" ? "Uzbek" : "Rus")}</span>
                </div>
                <div className="custom-dropdown-options">
                  <div
                    className="custom-dropdown-option"
                    onClick={() => handleLanguageChange("uzb")}>
                    <img src={uzb} alt="Uzbek" className="lang-icon" />
                    Uzbek
                  </div>
                  <div
                    className="custom-dropdown-option"
                    onClick={() => handleLanguageChange("rus")}>
                    <img src={rus} alt="Russian" className="lang-icon" />
                    Rus
                  </div>
                </div>
              </div>
            </li>
            <li className="header__nav__item-phone">
              <a className={"header__nav__item-tel"} href="tel:+99871 203-20-30">
                +99871 203-20-30
              </a>
            </li>
          </ul>
          <div className="header__nav__right">
            <div onClick={handleSearchClick} className="header__nav__search">
              <FiSearch />
            </div>
            <div className="header__nav__btn">
              <button>Оставить заявку</button>
            </div>
            {!hide ? (
              <button
                onClick={() => setHide(true)}
                className="header__nav__right-menu"
              >
                <RxHamburgerMenu />
              </button>
            ) : (
              <button
                onClick={() => setHide(false)}
                className="header__nav__right-menu"
              >
                <MdClose />
              </button>
            )}
          </div>
        </nav>
      </header>
      <div
        className={`header__nav__search__result ${hideSearch ? "header__nav__search__result-hide" : ""}`}>
        <div className="header__nav__search__result-form container">
          <CiSearch />
          <input placeholder="Поиск продукции..." type="search" />
        </div>
      </div>
    </>
  );
};

export default Header;

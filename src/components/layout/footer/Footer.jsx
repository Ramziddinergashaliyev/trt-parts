import React from "react";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import icon from "../../../assets/img/logo.png";

import "./footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list-title">{t("kompany")}</h3>
            </li>

            <li className="footer__item">
              <NavLink to="/razdel" className="footer__item-link">
                {t("Каталог")}
              </NavLink>
            </li>

            <li className="footer__item">
              <NavLink to="/company" className="footer__item-link">
                {t("компании")}
              </NavLink>
            </li>

            <li className="footer__item">
              <NavLink to="/accardion" className="footer__item-link">
                {t("Партнеры")}
              </NavLink>
            </li>

            <li className="footer__item">
              <NavLink to="/contact" className="footer__item-link">
                {t("Контакты")}
              </NavLink>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list-title">{t("ПРОДУКЦИЯ")}</h3>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{ cursor: "pointer" }}>
                <NavLink to={"rychagi-podveski/4"}>{t("рулевой")}</NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{ cursor: "pointer" }}>
                <NavLink to={"rychagi-podveski/5"}>
                  {t("комплектующие")}
                </NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{ cursor: "pointer" }}>
                <NavLink to={"rychagi-podveski/2"}>{t("подвески")}</NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{ cursor: "pointer" }}>
                <NavLink to={"rychagi-podveski/7"}>{t("тяги")}</NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{ cursor: "pointer" }}>
                <NavLink to={"rychagi-podveski/3"}>{t("опоры")}</NavLink>
              </span>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list-title">{t("МАТЕРИАЛЫ")}</h3>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">
                <NavLink to={"/new"}>{t("news")}</NavLink>
              </span>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list-title">{t("КОНТАКТЫ")}</h3>
            </li>
            <li className="footer__item">
              <span>{t("nomer")}</span>
              <a href="tel:+998712032030" className="footer__item-link">
                +99871 203-20-30
              </a>
            </li>
            <li className="footer__item">
              <span>{t("Адрес")}</span>
              <address className="footer__item-link">
                {t("address")}
              </address>
            </li>
            <li className="footer__item">
              <a
                href="mailto:sales@trt-parts.com"
                className="footer__item-link"
              >
                sales@trt-parts.com
              </a>
            </li>
            <li className="footer__item__information">
              <a
                href="https://www.instagram.com/trt_official_global"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sahifasiga o‘tish"
              >
                <button aria-label="Instagram sahifasiga o‘tish">
                  <FaInstagram />
                </button>
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__bottom">
          <div className="footer__bottom-icon">
            <img src={icon} alt="TRT kompaniyasi logotipi" />
          </div>

          <div className="footer__bottom-info">
            <p className="footer__bottom-info-text">
              {t("TRT")}
            </p>
            <p className="footer__bottom-info-text">
             {t("2025")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

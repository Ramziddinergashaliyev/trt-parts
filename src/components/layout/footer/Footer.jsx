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
              <NavLink className="footer__item-link" style={{ cursor: "pointer" }} to={"rychagi-podveski/14"}>{t("рулевой")}</NavLink>
            </li>

            <li className="footer__item">
              <NavLink className="footer__item-link" style={{ cursor: "pointer" }} to={"rychagi-podveski/15"}>
                {t("комплектующие")}
              </NavLink>
            </li>

            <li className="footer__item">
              <NavLink className="footer__item-link" style={{ cursor: "pointer" }} to={"rychagi-podveski/12"}>{t("подвески")}</NavLink>
            </li>

            <li className="footer__item">
              <NavLink className="footer__item-link" style={{ cursor: "pointer" }} to={"rychagi-podveski/17"}>{t("тяги")}</NavLink>
            </li>

            <li className="footer__item">
              <NavLink className="footer__item-link" style={{ cursor: "pointer" }} to={"rychagi-podveski/13"}>{t("опоры")}</NavLink>
            </li>
          </ul>

          <ul className="footer__list">

            <li className="footer__item">
              <h3 className="footer__list-title">{t("МАТЕРИАЛЫ")}</h3>
            </li>

            <li className="footer__item">
              <NavLink className="footer__item-link" to={"/new"}>{t("news")}</NavLink>
            </li>

          </ul>

          <ul className="footer__list">

            <li className="footer__item">
              <h3 className="footer__list-title">{t("КОНТАКТЫ")}</h3>
            </li>

            <li className="footer__item">
              <span>{t("nomer")}</span>
              <a href="tel:+998712032030" className="footer__item-link footer__item-link-phone">
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
                className="footer__item-link footer__item-link-mail"
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
                <span>
                  <FaInstagram />
                </span>
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

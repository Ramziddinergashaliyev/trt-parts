import React from "react";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import icon from "../../../assets/img/logo.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <ul className="footer__list">
            
            <li className="footer__item">
              <h3 className="footer__list-title">КОМПАНИЯ</h3>
            </li>

            <li className="footer__item">
              <NavLink to="/razdel" className="footer__item-link">
                Каталог
              </NavLink>
            </li>

            <li className="footer__item">
              <NavLink to="/company" className="footer__item-link">
                О компании
              </NavLink>
            </li>

            <li className="footer__item">
              <NavLink to="/accardion" className="footer__item-link">
                Партнеры
              </NavLink>
            </li>
            
            <li className="footer__item">
              <NavLink to="/contact" className="footer__item-link">
                Контакты
              </NavLink>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list-title">ПРОДУКЦИЯ</h3>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{cursor: "pointer"}}>
                <NavLink to={"rychagi-podveski/3"}>Наконечники рулевой тяги</NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{cursor: "pointer"}}>
                <NavLink to={"rychagi-podveski/4"}>Резиновые комплектующие</NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{cursor: "pointer"}}>
                <NavLink to={"rychagi-podveski/1"}>Рычаги подвески</NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{cursor: "pointer"}}>
                <NavLink to={"rychagi-podveski/6"}>Шарниры и рулевые тяги</NavLink>
              </span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link" style={{cursor: "pointer"}}>
                <NavLink to={"rychagi-podveski/2"}>Шаровые опоры</NavLink>
              </span>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list-title">МАТЕРИАЛЫ</h3>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Новости</span>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list-title">КОНТАКТЫ</h3>
            </li>
            <li className="footer__item">
              <span>Номер телефона </span>
              <a href="tel:+998712032030" className="footer__item-link">
                +99871 203-20-30
              </a>
            </li>
            <li className="footer__item">
              <span>Адрес </span>
              <address className="footer__item-link">
                Узбекистан, Ташкентская область, 111811, Зангиатинский р-н,
                Эркин КФЙ, ул. Зафаробод, 37а
              </address>
            </li>
            <li className="footer__item">
              <a href="mailto:info@trt-parts.com" className="footer__item-link">
                info@trt-parts.com
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
              TECHNOLOGIES OF REAL TIME — Полный цикл производства <br />
              современных высококачественных автозапчастей
            </p>
            <p className="footer__bottom-info-text">© 2025 | Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



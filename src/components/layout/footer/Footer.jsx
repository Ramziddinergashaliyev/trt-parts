// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import icon from "../../../assets/img/logo.png";

// import "./footer.scss";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <nav className="footer__nav">
//           <ul className="footer__list">
//             <h3 className="footer__list-title">КОМПАНИЯ</h3>
//             <li className="footer__item">
//               <NavLink to={"/razdel"} className={"footer__item-link"}>
//                 Каталог
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink to={"/company"} className={"footer__item-link"}>
//                 О компании
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink to={"/partner"} className={"footer__item-link"}>
//                 Партнеры
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink to={"/"} className={"footer__item-link"}>
//                 Дистрибьюторы
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink to={"/contact"} className={"footer__item-link"}>
//                 Контакты
//               </NavLink>
//             </li>
//           </ul>

//           <ul className="footer__list">
//             <h3 className="footer__list-title">ПРОДУКЦИЯ</h3>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>Рычаги подвески</NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>Шаровые опоры</NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>
//                 Рулевые наконечники
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>
//                 Стойки стабилизатора
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>Ступицы</NavLink>
//             </li>
//           </ul>

//           <ul className="footer__list">
//             <h3 className="footer__list-title">МАТЕРИАЛЫ</h3>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>Новости</NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>Лаборатория</NavLink>
//             </li>
//           </ul>

//           <ul className="footer__list">
//             <h3 className="footer__list-title">КОНТАКТЫ</h3>
//             <li className="footer__item">
//               <span>Номер телефона </span>
//               <NavLink className={"footer__item-link"}>
//                 +99871 203-20-30
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <span>Адрес </span>
//               <NavLink className={"footer__item-link"}>
//                 Узбекистан, Ташкентская область, 111811, Зангиатинский р-н,
//                 Эркин КФЙ, ул. Зафаробод, 37а
//               </NavLink>
//             </li>
//             <li className="footer__item">
//               <NavLink className={"footer__item-link"}>
//                 info@trt-parts.com
//               </NavLink>
//             </li>
//             <li className="footer__item__information">
//               <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
//                 <button>
//                   <FaTelegramPlane />
//                 </button>
//               </a>
//               <a
//                 href="https://www.instagram.com/trt_official_global"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button>
//                   <FaInstagram />
//                 </button>
//               </a>
//               <a
//                 href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button>
//                   <FaFacebookF />
//                 </button>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div className="footer__bottom">
//           <div className="footer__bottom-icon">
//             <img src={icon} alt="" />
//           </div>

//           <div className="footer__bottom-info">
//             <p className="footer__bottom-info-text">
//               TECHNOLOGIES OF REAL TIME — Полный цикл производства <br />{" "}
//               современных высококачественных автозапчастей
//             </p>
//             <p className="footer__bottom-info-text">
//               © 2024 | Все права защищены
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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
            <li>
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
              <NavLink to="/partner" className="footer__item-link">
                Партнеры
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink to="/" className="footer__item-link">
                Дистрибьюторы
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink to="/contact" className="footer__item-link">
                Контакты
              </NavLink>
            </li>
          </ul>

          <ul className="footer__list">
            <li>
              <h3 className="footer__list-title">ПРОДУКЦИЯ</h3>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Рычаги подвески</span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Шаровые опоры</span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Рулевые наконечники</span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Стойки стабилизатора</span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Ступицы</span>
            </li>
          </ul>

          <ul className="footer__list">
            <li>
              <h3 className="footer__list-title">МАТЕРИАЛЫ</h3>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Новости</span>
            </li>
            <li className="footer__item">
              <span className="footer__item-link">Лаборатория</span>
            </li>
          </ul>

          <ul className="footer__list">
            <li>
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
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram sahifasiga o‘tish"
              >
                <button aria-label="Telegram sahifasiga o‘tish">
                  <FaTelegramPlane />
                </button>
              </a>
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
              <a
                href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook sahifasiga o‘tish"
              >
                <button aria-label="Facebook sahifasiga o‘tish">
                  <FaFacebookF />
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
            <p className="footer__bottom-info-text">© 2024 | Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



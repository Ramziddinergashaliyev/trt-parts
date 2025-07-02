import React, { useEffect } from "react";
import "./contact.scss";
import icon from "../../assets/icons/mail.svg";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="contact">
      <div className="contact__bg"></div>
      <div className="container">
        <div className="contact__info">
          {/* <div className="contact__left">
             <h3 className="contact__left__title">Свяжитесь с нами</h3>
             <h4 className="contact__left__desc">КОНТАКТЫ</h4>
             <p className="contact__left__text">
               Для приобретения продукции, а также по вопросам сотрудничества и
               получения консультаций, свяжитесь с нами:
             </p>
             <div className="contact__left__information">
               <p className="contact__left__information-text">Номер телефона</p>
               <a className="contact__left__information-number" href="tel: +998 71 203-20-30">
                 +998 71 203-20-30
               </a>
               <div className="contact__left__information__mail">
                 <img src={icon} alt="mail-icon" />
                 <a className="contact__left__information__mail-link" href="mailto:info@trt-parts.com">
                   info@trt-parts.com
                 </a>
               </div>
               <p className="contact__left__information-adress">
                 Узбекистан, Ташкентская область, 111811, Зангиатинский р-н,
                 <br /> Эркин КФЙ, ул. Зафаробод, 37а
               </p>
             </div>
           </div> */}
          {/* <div className="contact__right">
             <h2 className="contact__right__title">Форма для связи</h2>
             <form action="" className="contact__right__form">
               <input placeholder={"имя"} type="text" />
               <input placeholder={"Номер"} type="text" />
               <textarea
                 placeholder="Комментарий"
                 id=""
                 cols="30"
                 rows="10"
               ></textarea>
               <button className="contact__right__form-btn">
                 <p className="contact__right__form-btn-text">
                   Оставить заявку <FaArrowRight />
                 </p>
               </button>
             </form>
             <p className="contact__right__text">
               Нажимая на кнопку, вы соглашаетесь на обработку ваших персональных
               данных.
             </p>
           </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

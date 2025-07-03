// import React, { useEffect } from "react";
// import "./contact.scss";
// import icon from "../../assets/icons/mail.svg";
// import { FaArrowRight } from "react-icons/fa6";

// const Contact = () => {
//   useEffect(() => {
//     window.scroll(0, 0);
//   });

//   return (
//     <div className="contact">
//       <div className="contact__bg"></div>
//       <div className="container">
//         <div className="contact__info">
//           <div className="contact__left">
//             <h3 className="contact__left__title">Свяжитесь с нами</h3>
//             <h4 className="contact__left__desc">КОНТАКТЫ</h4>
//             <p className="contact__left__text">
//               Для приобретения продукции, а также по вопросам сотрудничества и
//               получения консультаций, свяжитесь с нами:
//             </p>
//             <div className="contact__left__information">
//               <p className="contact__left__information-text">Номер телефона</p>
//               <a className="contact__left__information-number" href="tel: +998 71 203-20-30">
//                 +998 71 203-20-30
//               </a>
//               <div className="contact__left__information__mail">
//                 <img src={icon} alt="mail-icon" />
//                 <a className="contact__left__information__mail-link" href="mailto:info@trt-parts.com">
//                   info@trt-parts.com
//                 </a>
//               </div>
//               <p className="contact__left__information-adress">
//                 Узбекистан, Ташкентская область, 111811, Зангиатинский р-н,
//                 <br /> Эркин КФЙ, ул. Зафаробод, 37а
//               </p>
//             </div>
//           </div> 

//           <div className="contact__right">
//              <h2 className="contact__right__title">Форма для связи</h2>
//              <form action="" className="contact__right__form">
//                <input placeholder={"имя"} type="text" />
//                <input placeholder={"Номер"} type="text" />
//                <textarea
//                  placeholder="Комментарий"
//                  id=""
//                  cols="30"
//                  rows="10"
//                ></textarea>
//                <button className="contact__right__form-btn">
//                  <p className="contact__right__form-btn-text">
//                    Оставить заявку <FaArrowRight />
//                  </p>
//                </button>
//              </form>
//              <p className="contact__right__text">
//                Нажимая на кнопку, вы соглашаетесь на обработку ваших персональных
//                данных.
//              </p>
//            </div> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useEffect } from "react";
import "./contact.scss";
import icon from "../../assets/icons/mail.svg";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact">
      <div className="contact__bg" aria-hidden="true"></div>

      <div className="container">
        <div className="contact__info">
          <section className="contact__left" aria-labelledby="contact-heading">
            <h1 id="contact-heading" className="contact__left__title">Свяжитесь с нами</h1>
            <h2 className="contact__left__desc">КОНТАКТЫ</h2>
            <p className="contact__left__text">
              Для приобретения продукции, а также по вопросам сотрудничества и
              получения консультаций, свяжитесь с нами:
            </p>

            <address className="contact__left__information">
              <p className="contact__left__information-text">Номер телефона</p>
              <a
                className="contact__left__information-number"
                href="tel:+998712032030"
              >
                +998 71 203-20-30
              </a>

              <div className="contact__left__information__mail">
                <img src={icon} alt="Почтовый адрес" />
                <a
                  className="contact__left__information__mail-link"
                  href="mailto:info@trt-parts.com"
                >
                  info@trt-parts.com
                </a>
              </div>

              <p className="contact__left__information-adress">
                Узбекистан, Ташкентская область, 111811, Зангиатинский р-н,
                <br /> Эркин КФЙ, ул. Зафаробод, 37а
              </p>
            </address>
          </section>

          <section className="contact__right" aria-labelledby="form-heading">
            <h2 id="form-heading" className="contact__right__title">
              Форма для связи
            </h2>

            <form className="contact__right__form" onSubmit={(e) => e.preventDefault()}>
              <label>
                {/* <span className="visually-hidden">Ваше имя</span> */}
                <input type="text" name="name" placeholder="Имя" required />
              </label>

              <label>
                {/* <span className="visually-hidden">Номер телефона</span> */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер"
                  pattern="^\+?\d{9,15}$"
                  required
                />
              </label>

              <label>
                {/* <span className="visually-hidden">Комментарий</span> */}
                <textarea
                  name="message"
                  placeholder="Комментарий"
                  rows="6"
                  required
                ></textarea>
              </label>

              <button type="submit" className="contact__right__form-btn">
                <span className="contact__right__form-btn-text">
                  Оставить заявку <FaArrowRight aria-hidden="true" />
                </span>
              </button>
            </form>

            <p className="contact__right__text">
              Нажимая на кнопку, вы соглашаетесь на обработку ваших персональных данных.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;

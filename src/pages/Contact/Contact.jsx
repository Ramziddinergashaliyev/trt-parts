import React, { useEffect, memo } from "react";
import "./contact.scss";
import icon from "../../assets/icons/mail.svg";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation()

  return (
    <main className="contact">
      <div className="contact__bg" aria-hidden="true"></div>

      <div className="container">
        <div className="contact__info">
          <section className="contact__left" aria-labelledby="contact-heading">
            <h1 id="contact-heading" className="contact__left__title">
              {t("Свяжитесь с нами")}
            </h1>
            <h2 className="contact__left__desc">{t("КОНТАКТЫ")}</h2>
            <p className="contact__left__text">
              {t("Для приобретения")}
            </p>
            <address className="contact__left__information">
              <p className="contact__left__information-text">{t("nomer")}</p>
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
                  href="mailto:sales@trt-parts.com"
                >
                  sales@trt-parts.com
                </a>
              </div>

              <p className="contact__left__information-adress">
               {t("address")}
              </p>
            </address>
          </section>

          <section className="contact__right" aria-labelledby="form-heading">
            <h2 id="form-heading" className="contact__right__title">
              {t("Форма для связи")}
            </h2>

            <form
              className="contact__right__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label>
                <input type="text" name="name" placeholder={t("Имя")} required />
              </label>

              <label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("Номер")}
                  pattern="^\+?\d{9,15}$"
                  required
                />
              </label>

              <label>
                <textarea
                  name="message"
                  placeholder={t("Комментарий")}
                  rows="6"
                  required
                ></textarea>
              </label>

              <button type="submit" className="contact__right__form-btn">
                <span className="contact__right__form-btn-text">
                  {t("Оставить заявку")} <FaArrowRight aria-hidden="true" />
                </span>
              </button>
            </form>

            <p className="contact__right__text">
              {t("Нажимая")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default memo(Contact);

import React, { useEffect, memo, useState } from "react";
import "./contact.scss";
import icon from "../../assets/icons/mail.svg";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useCreateContactMutation } from "../../context/api/contactApi";
import { useGetProductsQuery } from "../../context/api/productApi";
import { toast } from "react-toastify";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
  name: "",
  phone: "",
  comment: "",
};

const Contact = () => {
  const [Sendmassage, { data, isSuccess, isError }] = useCreateContactMutation();
  const { formData, setFormData, handleChange } = useGetValue(initialState)
  const { t } = useTranslation();
  console.log(data);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    Sendmassage(formData);
    setFormData(initialState);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(t("Сообщение успешно отправлено!"));
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      toast.error(t("Ошибка при отправке формы"));
    }
  }, [isError])

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
            <p className="contact__left__text">{t("Для приобретения")}</p>

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

            <form className="contact__right__form" onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder={t("Имя")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                <input
                  type="text"
                  name="phone"
                  placeholder={t("Номер")}
                  value={formData.phone}
                  onChange={(e) => {
                    const onlyDigits = e.target.value.replace(/[^\d+]/g, "");
                    setFormData((prev) => ({ ...prev, phone: onlyDigits }));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  pattern="^\+?\d{9,15}$"
                  inputMode="numeric"
                  required
                />
              </label>

              <label>
                <textarea
                  name="comment"
                  placeholder={t("Комментарий")}
                  rows="6"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>

              <button type="submit" className="contact__right__form-btn">
                <span className="contact__right__form-btn-text">
                  {t("Оставить заявку")} <FaArrowRight aria-hidden="true" />
                </span>
              </button>
            </form>

            <p className="contact__right__text">{t("Нажимая")}</p>
          </section>

        </div>

      </div>
    </main>
  );
};

export default memo(Contact);

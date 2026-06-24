import React, { useEffect } from "react";
import icons from "../../assets/icons/vapros.svg";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

import "./vapros.scss";

const Vapros = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation();

  return (
    <section className="vapros">
      <div className="vapros__overlay"></div>

      <div className="vapros__container container">
        <div
          className="vapros__card"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="vapros__card__top">
            <h3 className="vapros__title">
              {t("have_questions")} <br />
              <span>{t("or_suggestions")}</span>
            </h3>
          </div>

          <p className="vapros__text">
            {t("leave_request_instruction")}
          </p>

          <NavLink to="/contact" className="vapros__btn">
            <span>{t("contact_us")}</span>
            <div className="vapros__btn-icon">
              <FaAngleRight />
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Vapros;
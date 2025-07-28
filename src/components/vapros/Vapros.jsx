import React from "react";
import icons from "../../assets/icons/vapros.svg";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./vapros.scss";

const Vapros = () => {
  const { t } = useTranslation();

  return (
    <div className="vapros">
      <div className="vapros__cards container">
        <div
          className="vapros__card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="vapros__card__top">
            <h3 className="vapros__card__top__left">
              {t("have_questions")} <br />
              <span>{t("or_suggestions")}</span>
            </h3>
            <img src={icons} alt="Vapros-icons" />
          </div>
          <div className="vapros__card__info">
            <p className="vapros__card__info-text">
              {t("leave_request_instruction")}
            </p>
          </div>
          <NavLink to={"contact"} className="vapros__card__btns">
            <button className="vapros__card__btns-white">
              {t("contact_us")}
            </button>
            <span className="vapros__card__btns-red">
              <FaAngleRight />
            </span>
          </NavLink>
        </div>       
      </div>
    </div>
  );
};

export default Vapros;

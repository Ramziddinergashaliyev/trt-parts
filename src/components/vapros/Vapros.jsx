import React from "react";
import icons from "../../assets/icons/vapros.svg";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import "./vapros.scss";

const Vapros = () => {
  return (
    <div className="vapros">
      <div className="vapros__cards container">
        <div
          className="vapros__card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <div className="vapros__card__top">
            <h3 className="vapros__card__top__left">
              Возникли вопросы <br />
              <span>или предложения?</span>
            </h3>
            <img src={icons} alt="Vapros-icons" />
          </div>
          <div className="vapros__card__info">
            <p className="vapros__card__info-text">
              Оставьте заявку, заполнив специальную форму, либо свяжитесь с нами
              по нашим контактным данным.
            </p>
          </div>
          <NavLink to={"contact"} className="vapros__card__btns">
            <button className="vapros__card__btns-white">
              Связаться с нами
            </button>
            <button className="vapros__card__btns-red">
              <FaAngleRight />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Vapros;

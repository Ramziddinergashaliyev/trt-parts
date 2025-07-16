import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import "./prinsp.scss";
import Service from "../service/Service";

const Prinsp = () => {
  return (
    <section className="prinsp container" aria-labelledby="prinsp-title">
      <div className="prinsp__top">
        <div className="prinsp__top__left">
          <p className="prinsp__top__left-text">ПРИНЦИПЫ</p>
          <h2 id="prinsp-title" className="prinsp__top__left-title">
            Высочайшее качество <br />
            <span>на всех этапах производства</span>
          </h2>
        </div>

        <NavLink
          to="/company"
          className="prinsp__top__right"
          aria-label="Перейти к информации о компании"
        >
          <span className="prinsp__top__right-white">О компании</span>
          <span className="prinsp__top__right-red" aria-hidden="true">
            <FaAngleRight />
          </span>
        </NavLink>
      </div>

      <Service />
    </section>
  );
};

export default Prinsp;

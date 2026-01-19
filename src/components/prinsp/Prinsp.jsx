import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./prinsp.scss";
import Service from "../service/Service";

const Prinsp = () => {
  const { t } = useTranslation();

  return (
    <section className="prinsp container" aria-labelledby="prinsp-title">
      <div className="prinsp__top">
        <div className="prinsp__top__left">
          <h2 id="prinsp-title" className="prinsp__top__left-title">
            {t("quality_title")} <br />
            <span>{t("quality_subtitle")}</span>
          </h2>
        </div>

        <NavLink
          to="/company"
          className="prinsp__top__right"
          aria-label={t("about_company")}
        >
          <span className="prinsp__top__right-white">{t("about_company")}</span>
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

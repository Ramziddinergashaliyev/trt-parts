import React, { memo, useEffect } from "react";
import CatalogCard from "../../components/catalogCard/CatalogCard";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import "./razdel.scss";
import { FaArrowRight } from "react-icons/fa6";

const Razdel = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation()

  return (
    <section className="razdel" aria-labelledby="razdelTitle">

      <div className="razdel__bg" aria-hidden="true"></div>

      <div className="container">

        <header className="razdel__info">
          <h1 className="razdel__info__title" id="razdelTitle">
            {t("category")}
          </h1>

          <NavLink to="/full-catalog" className="razdel__info__btn">
            {t("Full")}
            <FaArrowRight />
          </NavLink>
        </header>

        <CatalogCard />

        <section className="razdel__info-bottom" aria-labelledby="qualityTitle">
          <p className="razdel__info-bottom__text">{t("продукция")}</p>

          <h2 className="razdel__info-bottom__title" id="qualityTitle">
            {t("aboutText")}
          </h2>
        </section>
      </div>

    </section>
  );
};

export default memo(Razdel);
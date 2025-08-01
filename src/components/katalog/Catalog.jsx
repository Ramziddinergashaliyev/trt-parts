import React from "react";
import "./catalog.scss";
import CatalogCard from "../../components/catalogCard/CatalogCard";
import { useTranslation, Trans } from "react-i18next";

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__top">
          <div className="catalog__info">
            <p className="catalog__info-title">{t("catalog")}</p>
            <h3 className="catalog__info-text">
              <Trans i18nKey="catalog_heading" components={{ 1: <span /> }} />
            </h3>
            </div>

          <button className="catalog__card-link">
            <a
              href="https://trt-parts.com/wp-content/uploads/2025/04/katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("download_pdf")}
            </a>
          </button>
        </div>

        <CatalogCard />

        <div className="catalog__info__bottom">
          <h3 className="catalog__info__bottom-title">{t("about_product")}</h3>
          <div className="catalog__info__bottom-text">
            <p className="catalog__info__bottom-text-left">{t("left_text")}</p>
            <p className="catalog__info__bottom-text-right">{t("right_text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./characteristics.scss";
import { useTranslation } from "react-i18next";

const Characteristics = ({ data }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
    console.log(currentLang);

  return (
    <div className="characteristic">
      <table className="characteristic__table">
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Марка")}</h3>
          <span className="characteristic__row__desc">{data?.carName[0]}</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Модель")}</h3>
          <span className="characteristic__row__desc">{data?.model[0]}</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Страна")}</h3>
          <span className="characteristic__row__desc">Узбекистан</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Бренд")}</h3>
          <span className="characteristic__row__desc">{data?.brand}</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Артикул")}</h3>
          <span className="characteristic__row__desc">{data?.trtCode}</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Базовая")}</h3>
          <span className="characteristic__row__desc">{data?.unit}шт</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Категория")}</h3>
          <span className="characteristic__row__desc">
            {
              currentLang === "rus"
              ?
              data?.categories?.[0].translations.ru.name
              :
              data?.categories?.[0].translations.en.name
            }
          </span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">{t("Кросc")}</h3>
          <span className="characteristic__row__desc">{data?.oem[0]}</span>
        </tr>
      </table>
    </div>
  );
};

export default Characteristics;

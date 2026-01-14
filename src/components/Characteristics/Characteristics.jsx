import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./characteristics.scss";
import { useTranslation } from "react-i18next";

const Characteristics = ({ data }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="characteristic">

      <table className="characteristic__table">
        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Марка")}</th>
          <td className="characteristic__row__desc">{data?.carName[0]}</td>
        </tr>

        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Модель")}</th>
          <td className="characteristic__row__desc">{data?.model[0]}</td>
        </tr>

        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Страна")}</th>
          <td className="characteristic__row__desc">Узбекистан</td>
        </tr>

        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Бренд")}</th>
          <td className="characteristic__row__desc">{data?.brand}</td>
        </tr>

        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Артикул")}</th>
          <td className="characteristic__row__desc">{data?.trtCode}</td>
        </tr>

        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Базовая")}</th>
          <td className="characteristic__row__desc">{data?.unit}шт</td>
        </tr>

        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Категория")}</th>
          <td className="characteristic__row__desc">
            {currentLang === "rus"
              ? data?.categories?.[0].translations.ru.name
              : data?.categories?.[0].translations.en.name}
          </td>
        </tr>

        <tr className="characteristic__row">
          <th className="characteristic__row__text">{t("Кросc")}</th>
          <td className="characteristic__row__desc">{data?.oem[0]}</td>
        </tr>
      </table>

    </div>
  );
};

export default Characteristics;

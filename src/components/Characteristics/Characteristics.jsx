import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./characteristics.scss";

const Characteristics = ({ data }) => {
  const product = {
    marka: "LADA RIVA LAIKA SW",
    model: "2101-2107",
    country: "Узбекистан",
    brand: "TRT",
    articleNumber: "RS9021L",
    unit: "шт",
    category: "Рычаги подвески",
    crossCodesOEM: ["2101-2904101"],
  };

  console.log(data);

  console.log(product);

  return (
    <div className="characteristic">
      <table className="characteristic__table">
        <tr className="characteristic__row">
          <h3>Marka</h3>
          <span>{data?.carName}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Модель</h3>
          <span>{data?.model}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Страна</h3>
          <span>Узбекистан</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Бренд</h3>
          <span>{data?.brand}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Артикул бренда</h3>
          <span>{data?.trtCode}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Базовая единица</h3>
          <span>{data?.unit}шт</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Категория на сайте</h3>
          <span>{data?.categories?.[0].name}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Кросс коды OEM</h3>
          <span>{data?.oem}</span>
        </tr>
      </table>
    </div>
  );
};

export default Characteristics;

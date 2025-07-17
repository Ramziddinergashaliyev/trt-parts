import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./characteristics.scss";

const Characteristics = ({ data }) => {
  return (
    <div className="characteristic">
      <table className="characteristic__table">
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Marka</h3>
          <span className="characteristic__row__desc">{data?.carName}</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Модель</h3>
          <span className="characteristic__row__desc">{data?.model}</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Страна</h3>
          <span className="characteristic__row__desc">Узбекистан</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Бренд</h3>
          <span className="characteristic__row__desc">{data?.brand}</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Артикул бренда</h3>
          <span className="characteristic__row__desc">{data?.trtCode}</span>
        </tr>       
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Базовая единица</h3>
          <span className="characteristic__row__desc">{data?.unit}шт</span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Категория на сайте</h3>
          <span className="characteristic__row__desc">
            {data?.categories?.[0].name}
          </span>
        </tr>
        <tr className="characteristic__row">
          <h3 className="characteristic__row__text">Кросс коды OEM</h3>
          <span className="characteristic__row__desc">{data?.oem}</span>
        </tr>
      </table>
    </div>
  );
};

export default Characteristics;

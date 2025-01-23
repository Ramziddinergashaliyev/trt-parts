import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./characteristics.scss";

const Characteristics = () => {
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

  console.log(product);

  return (
    <div className="characteristic">
      <table className="characteristic__table">
        <tr className="characteristic__row">
          <h3>Marka</h3>
          <span>{product.marka}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Model</h3>
          <span>{product.model}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Country</h3>
          <span>{product.country}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Brand</h3>
          <span>{product.brand}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>ArticleNumber</h3>
          <span>{product.articleNumber}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Unit</h3>
          <span>{product.unit}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>Category</h3>
          <span>{product.category}</span>
        </tr>
        <tr className="characteristic__row">
          <h3>CrossCodesOEM</h3>
          <span>{product.crossCodesOEM}</span>
        </tr>
      </table>
    </div>
  );
};

export default Characteristics;

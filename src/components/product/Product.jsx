import React from "react";
import { NavLink } from "react-router-dom";
import "./product.scss";

const Product = ({ product }) => {
  return (
    <div className="result__card">
      <NavLink to={`/single/${product?.id}`} className="result__card__img">
        <img src={product?.imageUrl} alt="" />
      </NavLink>
      <div className="result__card__info">
        <p className="result__card__info-text">{product?.name}</p>
        <p className="result__card__info-title">Рычаги подвески</p>
      </div>
    </div>
  );
};

export default Product;

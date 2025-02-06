import React from "react";
import { NavLink } from "react-router-dom";
import "./product.scss";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

const Product = ({ product, isTrue }) => {
  return (
    <div className="result__card">
      <NavLink to={`/single/${product?.id}`} className="result__card__img">
        <img src={product?.images[0]} alt="" />
      </NavLink>
      {isTrue ? (
        <div className="result__card__img__btn">
          <button>
            <IoCreateOutline />
          </button>
          <button>
            <AiOutlineDelete />
          </button>
        </div>
      ) : (
        <></>
      )}

      <div className="result__card__info">
        <p className="result__card__info-text">{product?.name}</p>
        <p className="result__card__info-title">{product?.trtCode}</p>
      </div>
    </div>
  );
};

export default Product;

import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./product.scss";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteProductMutation } from "../../context/api/productApi";

const Product = ({ product, isTrue }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Mahsulotni o‘chirishni xohlaysizmi?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(product?.id).unwrap();
    } catch (error) {
      console.error("O‘chirishda xatolik:", error);
      alert("Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
    }
  };

  return (
    <div className="result__card" role="group" aria-label={`Mahsulot: ${product?.name}`}>
      <NavLink to={`/single/${product?.id}`} className="result__card__img">
        <img
          src={product?.images[0]}
          alt={product?.name || "Mahsulot rasmi"}
          loading="lazy"  
        />
      </NavLink>

      {isTrue && (
        <div className="result__card__img__btn">
          <button aria-label="Mahsulotni tahrirlash">
            <IoCreateOutline />
          </button>
          <button onClick={handleDelete} aria-label="Mahsulotni o‘chirish">
            <AiOutlineDelete />
          </button>
        </div>
      )}

      <div className="result__card__info">
        <p className="result__card__info-text">{product?.name}</p>
        <p className="result__card__info-title">{product?.trtCode}</p>
      </div>
    </div>
  );
};

export default memo(Product);

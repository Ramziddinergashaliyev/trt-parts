import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./product.scss";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteProductMutation } from "../../context/api/productApi";
import { useTranslation } from "react-i18next";
import img from "../../assets/img/psc.png";
import { toast } from "react-toastify";

const Product = ({ product, isTrue }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Вы хотите удалить продукт?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(product?.id).unwrap();
    } catch (error) {
      console.error("O‘chirishda xatolik:", error);
      toast.error("Произошла ошибка. Повторите попытку позже.");
    }
  };

  return (
    <div
      className="result__card"
      role="group"
      aria-label={`Mahsulot: ${product?.name}`}
    >
      <NavLink to={`/single/${product?.id}`} className="result__card__img">
        {product?.images && product.images.length > 0 && product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product?.translations?.[currentLang]?.name || "Mahsulot rasmi"}
            loading="lazy"
          />
        ) : (
          <img
            src={img}
            alt={product?.translations?.[currentLang]?.name || "Mahsulot rasmi"}
            loading="lazy"
          />
        )}
      </NavLink>

      {isTrue && (
        <div className="result__card__img__btn">
          <button type="button" aria-label="Mahsulotni tahrirlash">
            <IoCreateOutline />
          </button>
          <button type="button" onClick={handleDelete} aria-label="Mahsulotni o‘chirish">
            <AiOutlineDelete />
          </button>
        </div>
      )}

      <div className="result__card__info">
        <p className="result__card__info-text">
          {currentLang === "rus"
            ? product?.translations?.ru?.name
            : product?.translations?.en?.name}
        </p>
        <p className="result__card__info-title">{product?.trtCode}</p>
      </div>
    </div>
  );
};

export default memo(Product);

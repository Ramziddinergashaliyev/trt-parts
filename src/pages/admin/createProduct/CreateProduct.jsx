import React from "react";
import "./createProduct.scss";

const CreateProduct = () => {
  return (
    <div className="createProduct">
      <h3 className="createProduct__title">Создать продукт</h3>
      <form className="createProduct__form" action="">
        <label className="createProduct__form__item">
          sku
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          name
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          visibilityInCatalog
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          language
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          translationGroup
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          shortDescription
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          description
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          inStock
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          images
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          carName
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          model
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          oem
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          years
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          price
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          imageUrl
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          trtCode
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          brand
          <input className="createProduct__form__input" type="text" />
        </label>
        <label className="createProduct__form__item">
          categories
          <input className="createProduct__form__input" type="text" />
        </label>
        <button className="create__product__form__btn" type="submit">Создать</button>
      </form>
    </div>
  );
};

export default CreateProduct;

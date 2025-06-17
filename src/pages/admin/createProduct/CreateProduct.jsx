import React from "react";
import "./createProduct.scss";

const CreateProduct = () => {
  return (
    <div className="createProduct">
      <h3 className="createProduct__title">Создать продукт</h3>
      <form className="createProduct__form" action="">
        <label className="createProduct__form__item">
          sku
          <input type="text" />
        </label>
        <label className="createProduct__form__item">
          name
          <input type="text" />
        </label>
        <label className="createProduct__form__item">
          visibilityInCatalog
          <input type="text" />
        </label>
        <label className="createProduct__form__item">
          language
          <input type="text" />
        </label>
        <label className="createProduct__form__item">
          translationGroup
          <input type="text" />
        </label>
        <label className="createProduct__form__item">
          shortDescription
          <input type="text" />
        </label>
        <label className="createProduct__form__item">
          description
          <input type="text" />
        </label>
        <label>
          inStock
          <input type="text" />
        </label>
        <label>
          images
          <input type="text" />
        </label>
        <label>
          carName
          <input type="text" />
        </label>
        <label>
          model
          <input type="text" />
        </label>
        <label>
          oem
          <input type="text" />
        </label>
        <label>
          years
          <input type="text" />
        </label>
        <label>
          price
          <input type="text" />
        </label>
        <label>
          imageUrl
          <input type="text" />
        </label>
        <label>
          trtCode
          <input type="text" />
        </label>
        <label>
          brand
          <input type="text" />
        </label>
        <label>
          categories
          <input type="text" />
        </label>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default CreateProduct;

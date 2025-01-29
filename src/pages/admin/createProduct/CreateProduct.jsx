import React from "react";
import "./createProduct.scss";

const CreateProduct = () => {
  return (
    <div className="createProduct">
      <h3 className="createProduct__title">Создать продукт</h3>
      <form action="">
        <label>
          sku
          <input type="text" />
        </label>
        <label>
          name
          <input type="text" />
        </label>
        <label>
          visibilityInCatalog
          <input type="text" />
        </label>
        <label>
          language
          <input type="text" />
        </label>
        <label>
          translationGroup
          <input type="text" />
        </label>
        <label>
          shortDescription
          <input type="text" />
        </label>
        <label>
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

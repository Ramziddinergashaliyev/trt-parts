import React from "react";
import Product from "../product/Product";

const ProductItem = ({ data, isTrue }) => {
  if (!data || data.length === 0) {
    return (
      <div className="no-products" role="alert" aria-live="polite">
        Mahsulotlar topilmadi.
      </div>
    );
  }

  return (
    <>
      {data.map((product) => (
        <div role="listitem" key={product?.id}>
          <Product product={product} isTrue={isTrue} />
        </div>
      ))}
    </>
  );
};

export default ProductItem;

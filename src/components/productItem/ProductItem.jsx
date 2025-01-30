import React from "react";
import Product from "../product/Product";

const ProductItem = ({ data, isTrue }) => {
  return (
    <>
      {data?.map((product) => (
        <Product product={product} isTrue={isTrue} key={product?.id} />
      ))}
    </>
  );
};

export default ProductItem;

import React from "react";
import Product from "../product/Product";

const ProductItem = ({ data }) => {
  return (
    <>
      {data?.map((product) => (
        <Product product={product} key={product?._id} />
      ))}
    </>
  );
};

export default ProductItem;

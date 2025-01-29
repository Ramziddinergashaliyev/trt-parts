import React from "react";
import "./manageProduct.scss";
import { useGetProductsQuery } from "../../../context/api/productApi";
import ProductItem from "../../../components/productItem/ProductItem";
import Loading from "../../../components/loading/Loading";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="manageProduct">
      <h3 className="manageProduct__title">Продукты</h3>
      {data ? (
        <div className="manageProduct__cards">
          <ProductItem isTrue={true} data={data} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ManageProduct;

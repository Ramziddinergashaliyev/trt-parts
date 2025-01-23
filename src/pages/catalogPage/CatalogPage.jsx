import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCategoriesByIdQuery,
  useGetCategoriesQuery,
} from "../../context/api/categoryApi";
import ProductItem from "../../components/productItem/ProductItem";
import "./catalogPage.scss";
import Loading from "../../components/loading/Loading";

const CatalogPage = () => {
  const { id } = useParams();
  const { data } = useGetCategoriesByIdQuery(id);
  console.log(data);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="catalogPage">
      <div className="container">
        <p className="catalogPage__text">РАЗДЕЛ</p>
        <h3 className="catalogPage__title">Рычаги подвески</h3>
        {data ? (
          <div className="catalogPage__cards">
            <ProductItem data={data} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

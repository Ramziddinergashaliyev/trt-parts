import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoriesByIdQuery } from "../../context/api/categoryApi";
import ProductItem from "../../components/productItem/ProductItem";
import "./catalogPage.scss";
import Loading from "../../components/loading/Loading";

const CatalogPage = () => {
  const { id } = useParams();
  const { data } = useGetCategoriesByIdQuery(id);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="catalogPage">
      <div className="container">
        {data ? (
          <>
            <p className="catalogPage__text">РАЗДЕЛ</p>
            <h3 className="catalogPage__title">{data?.category?.name}</h3>
            <div className="catalogPage__cards">
              <ProductItem data={data?.parts} />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default memo(CatalogPage);

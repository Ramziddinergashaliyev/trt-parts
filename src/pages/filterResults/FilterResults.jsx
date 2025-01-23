import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchAllProductsQuery } from "../../context/api/productApi";
import ProductItem from "../../components/productItem/ProductItem";
import "./filterResults.scss";
import Filter from "../../components/filter/Filter";
import Loading from "../../components/loading/Loading";

const FilterResults = () => {
  const location = useLocation();
  const { oem, trt, brand, model } = location.state || {};

  const { data, error, isLoading } = useSearchAllProductsQuery({
    oem,
    trt,
    brand,
    model,
  });

  console.log(data);

  useEffect(() => {
    window.scroll(0, 0);
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading results.</p>;

  return (
    <div className="filterResults">
      <div className="filterResults__bg"></div>
      <div className="filterResults__top">
        <Filter />
      </div>
      <div className="container">
        <h4 className="filterResults__title">Результат поиска:</h4>
        {data ? (
          <>
            {data && data.length > 0 ? (
              <div className="filterResults__cards">
                <ProductItem data={data} />
              </div>
            ) : (
              <p>No results found.</p>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default FilterResults;

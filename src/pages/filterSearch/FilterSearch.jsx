import React, { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import "./filterSearch.scss";
import ProductItem from "../../components/productItem/ProductItem";
import { FILTER } from "../../static";
import Loading from "../../components/loading/Loading";

const FilterSearch = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="filterSearch">
      <div className="filterSearch-bg"></div>
      <div>
        <Filter />
      </div>
      <div className="container">
        <div className="filterSearch__cards-info">
          <h3 className="filterSearch__cards-info-text">Результат поиска:</h3>
        </div>
        {data ? (
          <div className="filterSearch__cards">
            <ProductItem data={FILTER} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default FilterSearch;

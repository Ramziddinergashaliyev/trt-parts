import React, { useEffect, memo } from "react";
import Filter from "../../components/filter/Filter";
import ProductItem from "../../components/productItem/ProductItem";
import { FILTER } from "../../static";
import Loading from "../../components/loading/Loading";

import "./filterSearch.scss";

const FilterSearch = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="filterSearch">
      <div className="filterSearch-bg" aria-hidden="true"></div>

      <section>
        <Filter />
      </section>

      <section className="container" aria-labelledby="search-result-heading">
        <h1
          id="search-result-heading"
          className="filterSearch__cards-info-text"
        >
          Результат поиска:
        </h1>

        {FILTER && FILTER.length > 0 ? (
          <div className="filterSearch__cards">
            <ProductItem data={FILTER} />
          </div>
        ) : (
          <Loading />
        )}
      </section>
    </main>
  );
};

export default memo(FilterSearch);

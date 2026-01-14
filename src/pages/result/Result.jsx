import React, { memo, useEffect } from "react";
import "./result.scss";
import { FILTER } from "../../static";
import ProductItem from "../../components/productItem/ProductItem";
import Loading from "../../components/loading/Loading";

const Result = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="result">
      <div className="result__bg" aria-hidden="true"></div>
      
      <div className="container">
        <p className="result__desc">ФИЛЬТР</p>
        <h1 className="result__title">Рычаги подвески</h1>

        {FILTER && FILTER.length > 0 ? (
          <div className="result__cards">
            <ProductItem data={FILTER} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
      
    </div>
  );
};

export default memo(Result);

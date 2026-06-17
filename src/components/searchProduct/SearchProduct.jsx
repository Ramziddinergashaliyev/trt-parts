import React, { memo, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import ProductItem from "../../components/productItem/ProductItem";
import { useSearchProductsQuery } from "../../context/api/productApi";
import Loading from "../../components/loading/Loading";

import "./searchProduct.scss";

const SearchProduct = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(() => searchParams.get("value") || "");
  const trimmedValue = value.trim();
  const { data, isLoading, isError } = useSearchProductsQuery(
    { value: trimmedValue },
    { skip: trimmedValue.length === 0 },
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const queryValue = searchParams.get("value") || "";
    setValue(queryValue);
  }, [searchParams]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="searchProduct">
      <div className="container">
        <p className="searchProduct__text">ПОИСК</p>
        <h1 className="searchProduct__title">Найти продукцию</h1>

        <div className="searchProduct__top">
          <CiSearch />
          <input
            onChange={handleChange}
            type="search"
            value={value}
            placeholder="Поиск продукции..."
            aria-label="Поиск продукции"
          />
        </div>

        <div className="searchProduct__search-result">
          <h2 className="searchProduct__search-result-text">Результат поиска:</h2>
        </div>

        {trimmedValue.length === 0 ? (
          <p style={{ padding: "1rem 0" }}>Введите название продукции для поиска.</p>
        ) : isLoading ? (
          <Loading />
        ) : isError || !data?.length ? (
          <p style={{ padding: "1rem 0" }}>
            Ничего не найдено по запросу: <strong>{value}</strong>
          </p>
        ) : (
          <>
            <ProductItem data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(SearchProduct);
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import "./searchProduct.scss";
import ProductItem from "../../components/productItem/ProductItem";
import {
  useGetProductsQuery,
  useSearchProductsQuery,
} from "../../context/api/productApi";
import Loading from "../../components/loading/Loading";

const SearchProduct = () => {
  const [value, setValue] = useState("");
  const { data } = useSearchProductsQuery({ value: value.trim() });
  const { data: card } = useGetProductsQuery();
  console.log(card);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="searchProduct">
      <div className="container">
        <p className="searchProduct__text">ПОИСК</p>
        <h3 className="searchProduct__title">Найти продукцию</h3>
        <div className="searchProduct__top">
          <CiSearch />
          <input
            onChange={(e) => setValue(e.target.value)}
            type="search"
            value={value}
            placeholder="Поиск продукции..."
          />
        </div>
        <div className="searchProduct__search-result">
          <h3 className="searchProduct__search-result-text">
            Результат поиска:
          </h3>
        </div>
        {data ? (
          <div className="searchProduct__cards">
            <ProductItem data={data} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default SearchProduct;

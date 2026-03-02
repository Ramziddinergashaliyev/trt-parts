import React, { useEffect, useRef, memo } from "react";
import { useLocation } from "react-router-dom";
import { useSearchAllProductsQuery } from "../../context/api/productApi";
import ProductItem from "../../components/productItem/ProductItem";
import Filter from "../../components/filter/Filter";
import Loading from "../../components/loading/Loading";

import "./filterResults.scss";
import { useTranslation } from "react-i18next";

const FilterResults = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { oem, trt, marka, model } = location.state || {};
  const resultsRef = useRef(null);

  const { data, error, isLoading } = useSearchAllProductsQuery({
    oem,
    trt,
    marka,
    model,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoading && (data || error) && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isLoading, data, error]);

  return (
    <main className="filterResults">

      <section className="filterResults__top"></section>

      <Filter />

      <section ref={resultsRef} className="container" aria-labelledby="results-heading">
        <h1 id="results-heading" className="filterResults__title">
          {t("Результат поиска")}:
        </h1>

        {isLoading ? (
          <Loading />
        ) : error ? (
          <p className="error-message">{t("Ошибка при загрузке результатов.")}</p>
        ) : data?.length > 0 ? (
          <div>
            <ProductItem data={data} />
          </div>
        ) : (
          <p className="no-results-message">{t("найдено")}.</p>
        )}
      </section>

    </main>
  );
};

export default memo(FilterResults);
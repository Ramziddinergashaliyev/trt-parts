import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoriesByIdQuery } from "../../context/api/categoryApi";
import ProductItem from "../../components/productItem/ProductItem";
import "./catalogPage.scss";
import Loading from "../../components/loading/Loading";
import { useTranslation } from "react-i18next";

const CatalogPage = () => {
  const { id } = useParams();
  const { data } = useGetCategoriesByIdQuery(id);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  console.log(data);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="catalogPage">
      <div className="container">
        {data ? (
          <>
            <p className="catalogPage__text">РАЗДЕЛ</p>
            <h3 className="catalogPage__title">
              {currentLang === "rus"
                ? data?.translations?.ru?.name
                : data?.translations?.en?.name}
            </h3>
            <div>
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

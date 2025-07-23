import React from "react";
import "./catalog.scss";
import CatalogCard from "../../components/catalogCard/CatalogCard";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__top">
          <div className="catalog__info">
            <p className="catalog__info-title">КАТАЛОГ</p>
            <h3 className="catalog__info-text">
              Разделы предоставляемой <span>продукции</span>
            </h3>
          </div>

          <button className="catalog__card-link">
            <a
              href="https://trt-parts.com/wp-content/uploads/2025/04/katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Скачать PDF-файл
            </a>
          </button>
        </div>
        <CatalogCard />
        <div className="catalog__info__bottom">
          <h3 className="catalog__info__bottom-title">О продукции</h3>
          <div className="catalog__info__bottom-text">
            <p className="catalog__info__bottom-text-left">
              Мы гордимся предлагать широкий ассортимент высококачественных
              автозапчастей, разработанных с использованием передовых технологий
              и инновационных материалов.
            </p>
            <p className="catalog__info__bottom-text-right">
              Наша продукция включает в себя запасные части для легковых и
              грузовых автомобилей, спроектированные для обеспечения оптимальной
              производительности и долговечности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

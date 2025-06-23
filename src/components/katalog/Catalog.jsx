import React from "react";
import "./catalog.scss";
import CatalogCard from "../../components/catalogCard/CatalogCard";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
       <div className="catalog__top">
          <div className="catalog__info ">
           <p className="catalog__info-title">КАТАЛОГ</p>
           <h3 className="catalog__info-text"> 
             Разделы предоставляемой <span>продукции</span>
           </h3>
          </div>
          <div className="catalog__download">
            <a
            href="https://trt-parts.com/wp-content/uploads/2025/04/katalog.pdf"
            download=""
            target="_blank"
            rel="noopener noreferrer"
            className="catalog__info__btn download-button">
           📥 Скачать PDF-файл
            </a>
          </div>
      </div>
        <CatalogCard />
        <div className="catalog__info__bottom">
          <h3 className="catalog__info__bottom-title">О продукции</h3>
          <div className="catalog__info__bottom-text">
            <div className="catalog__info__bottom-text-left">
              Мы гордимся предлагать широкий ассортимент высококачественных
              автозапчастей, разработанных с использованием передовых технологий
              и инновационных материалов.
            </div>
            <div className="catalog__info__bottom-text-right">
              Наша продукция включает в себя запасные части для легковых и
              грузовых автомобилей, спроектированные для обеспечения оптимальной
              производительности и долговечности.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

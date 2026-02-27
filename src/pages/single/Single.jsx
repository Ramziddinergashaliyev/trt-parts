import React, { useEffect, useState, memo, useRef } from "react";
import { useParams } from "react-router-dom";

import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
import Tabs from "../../components/Tab/Tab";
import Application from "../../components/Application/Application";
import Information from "../../components/Information/Information";
import Characteristics from "../../components/Characteristics/Characteristics";
import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useTranslation } from "react-i18next";
import img from "../../assets/img/psc.png";

import "./single.scss";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  console.log(data);
  
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("reviews");
  const [selectedImage, setSelectedImage] = useState("");
  const [hoveredImage, setHoveredImage] = useState(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const thumbnailContainerRef = useRef(null);
  const currentLang = i18n.language;

  const images = data?.images?.filter(img => img?.trim()) || [];
  const hasImages = images.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data?.images?.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  const checkScrollButtons = () => {
    const container = thumbnailContainerRef.current;
    if (container) {
      setCanScrollUp(container.scrollTop > 0);
      setCanScrollDown(
        container.scrollTop < container.scrollHeight - container.clientHeight
      );
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = thumbnailContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [images]);

  const scrollUp = () => {
    const container = thumbnailContainerRef.current;
    if (container) {
      container.scrollBy({
        top: -110,
        behavior: 'smooth'
      });
    }
  };

  const scrollDown = () => {
    const container = thumbnailContainerRef.current;
    if (container) {
      container.scrollBy({
        top: 110,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) return <LoadingSingle />;
  if (error || !data) return <p className="error">{t("Произошла ошибка")}</p>;

  return (
    <div className="detail">
      <div className="container">
        <div className="detail__cards">

          <div className="detail__card__img">

            <div className="thumbnail-wrapper">
              {images.length > 4 && (
                <button
                  className={`scroll-button scroll-button-up ${!canScrollUp ? 'disabled' : ''}`}
                  onClick={scrollUp}
                  disabled={!canScrollUp}
                >
                  <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
                    <path d="M10 0L20 12H0L10 0Z" fill="currentColor" />
                  </svg>
                </button>
              )}

              <div className="detail__card__imgs" ref={thumbnailContainerRef}>
                {hasImages ? (
                  images.map((img, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                      onClick={() => setSelectedImage(img)}
                      onMouseEnter={() => setHoveredImage(img)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img src={img} alt={`thumb-${index}`} />
                    </div>
                  ))
                ) : (
                  <div className="thumbnail active">
                    <img src={img} alt="no-image" />
                  </div>
                )}
              </div>

              {images.length > 4 && (
                <button
                  className={`scroll-button scroll-button-down ${!canScrollDown ? 'disabled' : ''}`}
                  onClick={scrollDown}
                  disabled={!canScrollDown}
                >
                  <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
                    <path d="M10 12L0 0H20L10 12Z" fill="currentColor" />
                  </svg>
                </button>
              )}
            </div>

            <div className="detail__img">
              <img
                src={
                  hasImages
                    ? hoveredImage || selectedImage || images[0]
                    : img
                }
                alt="Mahsulot rasmi"
              />
            </div>

          </div>

          <div className="detail__card__info">

            <h3 className="detail__title">
              {currentLang === "rus"
                ? data?.translations?.ru?.name
                : data?.translations?.en?.name}
            </h3>

            <ul className="detail__card__info-list">
              {data?.trtCode && (
                <li className="detail__card__info-item">
                  {t("TRT-код")}: <span>{data.trtCode}</span>
                </li>
              )}

              {data?.carName && (
                <li className="detail__card__info-item">
                  {t("Марка")}: <span>{data.carName[0]}</span>
                </li>
              )}

              {data?.model?.length > 0 && (
                <li className="detail__card__info-item">
                  {t("Модель")}: <span>{data.model[0]}</span>
                </li>
              )}

              {data?.oem?.length > 0 && (
                <li className="detail__card__info-item">
                  {t("oem")}: <span>{data.oem[0]}</span>
                </li>
              )}

              {data?.years && (
                <li className="detail__card__info-item">
                  {t("Год")}: <span>{data.years[0]}</span>
                </li>
              )}
            </ul>

          </div>

        </div>
      </div>

      <Tabs activeTab={activeTab} onTabClick={setActiveTab} />

      <div className="tab-content">
        <div className="tab-content-text container">
          {activeTab === "reviews" && <Characteristics data={data} />}
          {activeTab === "Application" && <Application data={data} />}
          {activeTab === "Information" && <Information data={data} />}
        </div>
      </div>

      <div className="container">
        <HandleSwiper categoryId={data?.categories} currentProductId={id} />
      </div>

    </div>
  );
};

export default memo(Single);
import React, { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";

import "./single.scss";
import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
import Tabs from "../../components/Tab/Tab";
import Application from "../../components/Application/Application";
import Information from "../../components/Information/Information";
import Characteristics from "../../components/Characteristics/Characteristics";
import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useTranslation } from "react-i18next";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("reviews");
  const [selectedImage, setSelectedImage] = useState("");
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data?.images?.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  if (isLoading) return <LoadingSingle />;
  if (error || !data)
    return <p className="error">Xatolik yuz berdi. Qayta urinib ko‘ring.</p>;

  return (
    <div className="detail">
      <div className="container">
        <div className="detail__cards">
          <div className="detail__card__img">
            <div className="detail__card__imgs">
              {data.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    selectedImage === img ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                  onMouseEnter={() => setHoveredImage(img)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img src={img} alt={`thumb-${index}`} />
                </div>
              ))}
            </div>
            <div className="detail__img">
              <img src={hoveredImage || selectedImage} alt="Mahsulot rasmi" />
            </div>
          </div>

          <div className="detail__card__info">
            <h3 className="detail__title">{data.name}</h3>
            <ul className="detail__card__info-list">
              {data?.trtCode && (
                <li className="detail__card__info-item">
                  {t("TRT-код")}: <span>{data.trtCode}</span>
                </li>
              )}
              {data?.marka && (
                <li className="detail__card__info-item">
                  {t("Марка")}: <span>{data.marka}</span>
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
              {data?.year && (
                <li className="detail__card__info-item">
                  {t("Год")}: <span>{data.year}</span>
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
        <HandleSwiper />
      </div>
    </div>
  );
};

export default memo(Single);

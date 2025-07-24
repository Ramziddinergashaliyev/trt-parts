import React, { useEffect, memo, useState } from "react";
import img from "../../assets/img/2.webp";
import img1 from "../../assets/sertifikat/IQNET.webp";
import img2 from "../../assets/sertifikat/SICQ.webp";
import img3 from "../../assets/sertifikat/TRT.webp";
import img4 from "../../assets/sertifikat/UZAUTO.webp";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./company.scss";
import Service from "../../components/service/Service";
import Photo from "../../components/photo/Photo";
import Partner from "../partner/Partner";
import { useTranslation } from "react-i18next";

const Company = () => {
  const [modalImage, setModalImage] = useState(null);
  const { t } = useTranslation()
  const handleOpenModal = (imgSrc) => {
    setModalImage(imgSrc);
  };

  useEffect(() => {
    document.body.style.overflow = modalImage ? "hidden" : "auto";
  }, [modalImage]);

  const handleCloseModal = () => {
    setModalImage(null);
  };

  // useEffect(() => {
  //   window.scroll(0, 0);
  // });

  return (
    <div className="company">
      <div className="container">
        <div className="company__info">
          <div className="company__info__left">
            <h3 className="company__info__left-title">{t("компании")}</h3>
            <h3 className="company__info__left-desc">
              TECHNOLOGIES OF REAL TIME
            </h3>
            <p className="company__info__left-texts">
              <span>
                {t("trttext")}
              </span>{" "}
              <br />
              <span>
                {t("трудятся")}
              </span>
              <br />
              <span>
                {t("Сотрудники")}
              </span>
            </p>
          </div>
          <div className="company__info__right">
            <img src={img} alt="Company Image" />
          </div>
        </div>

        <div className="company__info__bottom">
          <p className="company__info__bottom-text">
            {t("Лаборатория")}
          </p>
          <p className="company__info__bottom-text">
            {t("Особое")}
          </p>
          <p className="company__info__bottom-text">
            {t("При производстве")}
          </p>
        </div>

        <Service />
        <Photo />
        <Partner />
      </div>

      <div className="company__swiper">
        <div className="container">
          <h4 className="company__swiper-title">{t("Наши Сертификаты")}</h4>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="company__swiper-container"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {[img1, img2, img3, img4, img1, img2, img3, img4].map(
              (img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`cert-${index}`}
                    className="company__swiper-img"
                    onClick={() => handleOpenModal(img)}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={modalImage} alt="Zoom" className="modal__img" />
        </div>
      )}
    </div>
  );
};

export default memo(Company);

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./handleSwiper.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HandleSwiper = () => {
  const { t } = useTranslation()
  const { data } = useGetProductsQuery()
  console.log(data);

  return (
    <div className="custom__swiper">
      <h2 className="custom__swiper__title">{t("Рекомендации")}</h2>
      <Swiper
        className="custom__swiper-cards"
        modules={[Navigation, Autoplay]}
        spaceBetween={5}
        slidesPerView={4}
        navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          200: { slidesPerView: 1 },
          650: { slidesPerView: 2 },
          1111: { slidesPerView: 3 },
          1210: { slidesPerView: 4 },
        }}>
        {data?.map((el) => (
          <SwiperSlide key={el?.id}>
            <div className="custom__swiper-content">
              <NavLink to={`/single/${el?.id}`}  onClick={() => window.scrollTo(0, 0)}>
              <img
                src={el?.images[0]}
                alt={el?.title}
                className="custom__swiper-image"
                />
                </NavLink>
              <div className="custom__swiper-info">
                <h3 className="custom__swiper-info-title">{el?.name}</h3>
                <p className="custom__swiper-info-subtitle">{el?.trtCode}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default HandleSwiper;

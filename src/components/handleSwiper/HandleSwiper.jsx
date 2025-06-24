import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./handleSwiper.scss";
import { Swipper } from "../../static";

const HandleSwiper = () => {
  return (
    <div className="custom__swiper">
      <h2 className="custom__swiper__title">Рекомендации</h2>
      <Swiper
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
          1112: { slidesPerView: 4 },
        }}>

        {Swipper?.map((el) => (
          <SwiperSlide key={el?.id}>
            <div className="custom__swiper-content">
              <img src={el?.img} alt={el?.title} className="custom__swiper-image" />
              <div className="custom__swiper-info">
                <h3 className="custom__swiper-info-title">{el?.title}</h3>
                <p className="custom__swiper-info-subtitle">{el?.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button prev-button"></button>
      <button className="swiper-button next-button"></button>      
    </div>
  );
};

export default HandleSwiper;

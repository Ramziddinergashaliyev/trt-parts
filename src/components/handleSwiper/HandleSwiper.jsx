import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./handleSwiper.scss";
import { ITEMS } from "../../static";

const HandleSwiper = () => {
  
  return (
    <div className="custom-swiper-container">
      <h2 className="swiper-title__name">Рекомендации</h2>
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
        }}
      >
        {ITEMS?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="swiper-slide-content">
              <img src={item.img} alt={item.title} className="swiper-image" />
              <div className="swiper-info">
                <h3 className="swiper-title">{item.title}</h3>
                <p className="swiper-subtitle">{item.subtitle}</p>
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

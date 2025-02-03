import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./galarey.scss";
import img1 from "../../assets/img/compony1.png";
import img2 from "../../assets/img/compony2.png";
import img3 from "../../assets/img/compony3.png";

const Galarey = () => {
  const items = [
    {
      id: 1,
      img: img1,
      title: "Опора шаровая TRT SPARK R8004",
      subtitle: "Шаровые опоры",
    },
    {
      id: 2,
      img: img2,
      title: "Рулевой наконечник TRT 7172",
      subtitle: "Рулевые наконечники",
    },
    {
      id: 3,
      img: img3,
      title: "Рычаг подвески TRT SPARK 1424",
      subtitle: "Рычаги подвески",
    },
    {
      id: 4,
      img: img3,
      title: "Рулевой наконечник TRT 7172",
      subtitle: "Рулевые наконечники",
    },
    {
      id: 1,
      img: img1,
      title: "Опора шаровая TRT SPARK R8004",
      subtitle: "Шаровые опоры",
    },
    {
      id: 2,
      img: img2,
      title: "Рулевой наконечник TRT 7172",
      subtitle: "Рулевые наконечники",
    },
    {
      id: 3,
      img: img3,
      title: "Рычаг подвески TRT SPARK 1424",
      subtitle: "Рычаги подвески",
    },
    {
      id: 4,
      img: img3,
      title: "Рулевой наконечник TRT 7172",
      subtitle: "Рулевые наконечники",
    },
  ];

  return (
    <div className="swiper-photos">
      <div className="container swiper-card">
        <h2 className="swiper-title__name">Галарея</h2>
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
          {items.map((item) => (
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
    </div>
  );
};

export default Galarey;

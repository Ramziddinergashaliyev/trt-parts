import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img from "../../assets/img/psc.png";
import "./handleSwiper.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HandleSwiper = ({ categoryId, currentProductId }) => {
  const { t, i18n } = useTranslation();
  const { data } = useGetProductsQuery();
  const currentLang = i18n.language;

  const currentCategoryName = categoryId[0]?.translations?.en?.name || categoryId[0]?.translations?.ru?.name;

  const filteredData = data?.filter((el) => {
    const elCategoryName =
      el?.categories[0]?.translations?.en?.name || el?.categories[0]?.translations?.ru?.name;

    return (
      elCategoryName === currentCategoryName &&
      String(el?.id) !== String(currentProductId)
    );
  });

  if (!filteredData?.length) return null;

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
        loop={filteredData.length > 4}
        breakpoints={{
          200: { slidesPerView: 1 },
          650: { slidesPerView: 2 },
          1110: { slidesPerView: 3 },
          1210: { slidesPerView: 4 },
        }}
      >
        {filteredData.map((el) => (
          <SwiperSlide key={el?.id}>
            <div className="custom__swiper-content">
              <NavLink
                to={`/single/${el?.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {el?.images && el.images.length > 0 && el.images[0] ? (
                  <img
                    src={el.images[0]}
                    alt={
                      currentLang === "rus"
                        ? el?.translations?.ru?.name
                        : el?.translations?.en?.name
                    }
                    className="custom__swiper-image"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={img}
                    alt={
                      currentLang === "rus"
                        ? el?.translations?.ru?.name
                        : el?.translations?.en?.name
                    }
                    className="custom__swiper-image"
                    loading="lazy"
                  />
                )}
              </NavLink>

              <div className="custom__swiper-info">
                <h3 className="custom__swiper-info-title">
                  {currentLang === "rus"
                    ? el?.translations?.ru?.name
                    : el?.translations?.en?.name}
                </h3>
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
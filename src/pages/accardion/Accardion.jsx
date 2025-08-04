import React, { useState, useEffect, memo } from "react";
import "./accardion.scss";
import { ACCARDION, ACCARDIONEN } from "../../static";
import { FiPlus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import bgVideo from "../../assets/video/acc.mp4";
import { button } from "framer-motion/client";
import { useTranslation } from "react-i18next";

const Accardion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { t, i18n } = useTranslation();
  console.log(i18n.languages);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accardion">
      <div className="accardion__video">
        <video
          className="accardion__video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="accardion__list">
        <h3 className="accardion__title">{t("Дистрибьюторы")}</h3>

        <ul className="accardion__list-info container">
          <p className="accardion__list-info-text">{t("Список")}</p>
          {i18n.languages[0] == "rus" ? (
            <>
              {ACCARDION?.map((el, index) => (
                <li key={el?.id} className="accardion__item">
                  <div
                    className="accardion__header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="accardion__header__country">{el?.country}</p>
                    <span
                      className={`accardion__icon ${
                        activeIndex === index ? "accardion__icon--rotated" : ""
                      }`}
                    >
                      {activeIndex === index ? (
                        <button className="accardion-btn">
                          <RiCloseFill />
                        </button>
                      ) : (
                        <button className="accardion-btn">
                          <FiPlus />
                        </button>
                      )}
                    </span>
                  </div>
                  <div
                    className={`accardion__content ${
                      activeIndex === index ? "accardion__content--open" : ""
                    }`}
                  >
                    <div className="accardion__content-inner">
                      <p className="accardion__content__name">{el?.name}</p>
                      <p className="accardion__content__title">{el?.title}</p>
                      <a
                        className="accardion__content__number"
                        href={`tel:${el?.number}`}
                      >
                        {el?.number}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <>
              {ACCARDIONEN?.map((el, index) => (
                <li key={el?.id} className="accardion__item">
                  <div
                    className="accardion__header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="accardion__header__country">{el?.country}</p>
                    <span
                      className={`accardion__icon ${
                        activeIndex === index ? "accardion__icon--rotated" : ""
                      }`}
                    >
                      {activeIndex === index ? (
                        <button className="accardion-btn">
                          <RiCloseFill />
                        </button>
                      ) : (
                        <button className="accardion-btn">
                          <FiPlus />
                        </button>
                      )}
                    </span>
                  </div>
                  <div
                    className={`accardion__content ${
                      activeIndex === index ? "accardion__content--open" : ""
                    }`}
                  >
                    <div className="accardion__content-inner">
                      <p className="accardion__content__name">{el?.name}</p>
                      <p className="accardion__content__title">{el?.title}</p>
                      <a
                        className="accardion__content__number"
                        href={`tel:${el?.number}`}
                      >
                        {el?.number}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(Accardion);

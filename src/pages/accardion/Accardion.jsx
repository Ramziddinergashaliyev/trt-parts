import React, { useState, useEffect,memo } from "react";
import "./accardion.scss";
import { ACCARDION } from "../../static";
import { FiPlus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import bgVideo from "../../assets/video/acc.webm";

const Accardion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
        <h3 className="accardion__title">Дистрибьюторы</h3>

        <ul className="accardion__list-info container">
          <p className="accardion__list-info-text">Список стран</p>
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
                  {activeIndex === index ? <RiCloseFill /> : <FiPlus />}
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
        </ul>
      </div>
    </div>
  );
};

export default memo(Accardion);

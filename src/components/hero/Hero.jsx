import React, { useState, useEffect } from "react";
import "./hero.scss";
import icon from "../../assets/img/hero.png";
import poster from "../../assets/img/preview.webp";
import { FaAngleRight } from "react-icons/fa6";
import video1 from "../../assets/video/video.mp4";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedStats from "../animatedState/AnimatedStats";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <>
      <div className="hero">
        <div className="hero__slide">
          <video
            className="hero__slide__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={video1} type="video/mp4" />
            {t("Ваш браузер")}
          </video>

          {!videoLoaded && (
            <div className="hero__preview">
              <img src={poster} alt="preview" />
            </div>
          )}

          <div className="hero__overlay container">
            <motion.div
              className="hero__overlay__left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="hero__overlay__left-text">{t("АВТОЗАПЧАСТИ")}</p>
              <h2 className="hero__overlay__left-title">
                {t("Глобальные стандарты качества")}
              </h2>
            </motion.div>

            <motion.div
              className="hero__overlay__right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <NavLink
                to="/contact"
                aria-label="Связаться с нами"
                className="hero__overlay__right-btns"
              >
                <button className="hero__overlay__right-btns-white">
                  {t("Связаться с нами")}
                </button>
                <span className="hero__overlay__right-btns-red">
                  <FaAngleRight />
                </span>
              </NavLink>

              <div className="hero__overlay__right-img">
                <img src={icon} alt="hero-icons" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero__bottom">
          <div className="hero__bottom__left container">
            <p className="hero__bottom__left-text">{t("Полный")}</p>
          </div>

          <div className="hero__bottom__info container">
            <div className="hero__bottom__info-stats">
              <AnimatedStats endValue={12000} text="+" />
              <p className="hero__bottom__info-stats-text">
                {t("Деталей в день")}
              </p>
            </div>
            <div className="hero__bottom__info-stats">
              <AnimatedStats endValue={65} text="%" />
              <p className="hero__bottom__info-stats-text">
                {t("Доля экспорта")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__line"></div>
    </>
  );
};

export default Hero;

import React, { useState } from "react";
import "./hero.scss";
import icon from "../../assets/img/hero.png";
import poster from "../../assets/img/preview.webp";
import { FaAngleRight } from "react-icons/fa6";
import video1 from "../../assets/video/video.mp4";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedStats from "../animatedState/AnimatedStats";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
            Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
          </video>

          {!videoLoaded && (
            <>
            <div className="hero__preview">
              <img src={poster} alt="preview" />
            </div>
            <div className="loading-spinner" />
            </>
          )}

          <div className="hero__overlay container">
            <motion.div
              className="hero__overlay__left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <p className="hero__overlay__left-text">АВТОЗАПЧАСТИ</p>
              <h2 className="hero__overlay__left-title">
                Глобальные стандарты качества
              </h2>
            </motion.div>

            <motion.div
              className="hero__overlay__right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <NavLink to="/contact" className="hero__overlay__right-btns">
                <button className="hero__overlay__right-btns-white">
                  Связаться с нами
                </button>
                <button className="hero__overlay__right-btns-red">
                  <FaAngleRight />
                </button>
              </NavLink>

              <div className="hero__overlay__right-img">
                <img src={icon} alt="hero-icons" />
              </div>

            </motion.div>
          </div>
        </div>

        <div className="hero__bottom">
          <div className="hero__bottom__left container">
            <p className="hero__bottom__left-text">
              Полный цикл производства современных высококачественных
              автозапчастей для легковых и грузовых автомобилей
            </p>
          </div>

          <div className="hero__bottom__info container">
            <div className="hero__bottom__info-stats">
              <AnimatedStats endValue={12000} text="+" />
              <p className="hero__bottom__info-stats-text">Деталей в день</p>
            </div>
            <div className="hero__bottom__info-stats">
              <AnimatedStats endValue={65} text="%" />
              <p className="hero__bottom__info-stats-text">Доля экспорта</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__line"></div>
    </>
  );
};

export default Hero;
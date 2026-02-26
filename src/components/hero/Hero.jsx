// import React, { useState, useEffect } from "react";
// import "./hero.scss";
// import icon from "../../assets/img/hero.png";
// import poster from "../../assets/img/preview.webp";
// import { FaAngleRight } from "react-icons/fa6";
// import video1 from "../../assets/video/video.mp4";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import AnimatedStats from "../animatedState/AnimatedStats";
// import { useTranslation } from "react-i18next";

// const Hero = () => {
//   const { t, i18n } = useTranslation();
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [currentLang, setCurrentLang] = useState(i18n.language);

//   useEffect(() => {
//     const handleLanguageChange = (lng) => {
//       setCurrentLang(lng);
//     };

//     i18n.on("languageChanged", handleLanguageChange);

//     return () => {
//       i18n.off("languageChanged", handleLanguageChange);
//     };

//   }, [i18n]);

//   useEffect(() => {

//     const timer = setTimeout(() => {
//       setVideoLoaded(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className="hero">
        
//         <div className="hero__slide">
//           <video
//             className="hero__slide__video"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             poster={poster}
//             onLoadedData={() => setVideoLoaded(true)}
//           >
//             <source src={video1} type="video/mp4" />
//             {t("Ваш браузер")}
//           </video>

//           {!videoLoaded && (
//             <div className="hero__preview">
//               <img src={poster} alt="preview" />
//             </div>
//           )}

//           <div className="hero__overlay container">
//             <motion.div
//               className="hero__overlay__left"
//               initial={{ opacity: 0, x: -80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <p className="hero__overlay__left-text">{t("АВТОЗАПЧАСТИ")}</p>
//               <h2 className="hero__overlay__left-title">
//                 {t("Глобальные стандарты качества")}
//               </h2>
//             </motion.div>

//             <motion.div
//               className="hero__overlay__right"
//               initial={{ opacity: 0, x: 80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <NavLink
//                 to="/contact"
//                 aria-label="Связаться с нами"
//                 className="hero__overlay__right-btns"
//               >
//                 <button className="hero__overlay__right-btns-white">
//                   {t("Связаться с нами")}
//                 </button>
//                 <span className="hero__overlay__right-btns-red">
//                   <FaAngleRight />
//                 </span>
//               </NavLink>

//               <div className="hero__overlay__right-img">
//                 <img src={icon} alt="hero-icons" />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <div className="hero__bottom">

//           <div className="hero__bottom__left container">
//             <p className="hero__bottom__left-text">{t("Полный")}</p>
//           </div>

//           <div className="hero__bottom__info container">

//             <div className="hero__bottom__info-stats">
//               <AnimatedStats endValue={12000} text="+" />
//               <p className="hero__bottom__info-stats-text">
//                 {t("Деталей в день")}
//               </p>
//             </div>

//             <div className="hero__bottom__info-stats">
//               <AnimatedStats endValue={65} text="%" />
//               <p className="hero__bottom__info-stats-text">
//                 {t("Доля экспорта")}
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>

//       <div className="hero__line"></div>
//     </>
//   );
// };

// export default Hero;



import React, { useState, useEffect, useRef } from "react";
import "./hero.scss";
import icon from "../../assets/img/hero.png";
import poster from "../../assets/img/preview.webp";
import { FaAngleRight } from "react-icons/fa6";
import video1 from "../../assets/video/video.mp4";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AnimatedStats from "../animatedState/AnimatedStats";
import { useTranslation } from "react-i18next";

const SplitText = ({ text, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => (
        <span key={wi} className="split-word">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="split-char"
              initial={{ y: "120%", opacity: 0, rotateX: -80 }}
              animate={{ y: "0%", opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + wi * 0.07 + ci * 0.025,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="split-char">&nbsp;</span>}
        </span>
      ))}
    </>
  );
};

const MagneticBtn = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  );
};


const CursorGlow = () => {
  // const x = useMotionValue(-300);
  // const y = useMotionValue(-300);
  // const sx = useSpring(x, { stiffness: 70, damping: 22 });
  // const sy = useSpring(y, { stiffness: 70, damping: 22 });

  // useEffect(() => {
  //   const fn = (e) => { x.set(e.clientX); y.set(e.clientY); };
  //   window.addEventListener("mousemove", fn);
  //   return () => window.removeEventListener("mousemove", fn);
  // }, []);

  // return (
  //   <motion.div className="hero__glow"
  //     style={{ left: sx, top: sy, translateX: "-50%", translateY: "-50%" }} />
  // );
};


const Grain = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    let raf;
    const draw = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      const img = ctx.createImageData(c.width, c.height);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = d[i+1] = d[i+2] = v;
        d[i+3] = 15;
      }
      ctx.putImageData(img, 0, 0);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="hero__grain" />;
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.on("languageChanged", () => {});
    return () => i18n.off("languageChanged", () => {});
  }, [i18n]);

  useEffect(() => {
    const tid = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(tid);
  }, []);

  useEffect(() => {
    const tid = setTimeout(() => setVideoLoaded(true), 4000);
    return () => clearTimeout(tid);
  }, []);

  return (
    <>
      <div className="hero">
        <Grain />
        <CursorGlow />

        <div className="hero__slide">
          <div className={`hero__preview${videoLoaded ? " hero__preview--hidden" : ""}`}>
            <img src={poster} alt="preview" />
          </div>

          <video
            className="hero__slide__video"
            autoPlay muted loop playsInline preload="auto" poster={poster}
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src={video1} type="video/mp4" />
            {t("Ваш браузер")}
          </video>

          <div className="hero__overlay container">
            <div className="hero__overlay__left">

              <motion.div className="hero__overlay__left-label-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
              >
                <p className="hero__overlay__left-text">{t("АВТОЗАПЧАСТИ")}</p>
              </motion.div>

              {ready && (
                <h2 className="hero__overlay__left-title">
                  <SplitText text={t("Глобальные стандарты качества")} delay={0.3} />
                </h2>
              )}
            </div>

            <motion.div className="hero__overlay__right"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticBtn>
                <NavLink to="/contact" aria-label="Связаться с нами"
                  className="hero__overlay__right-btns">
                  <button className="hero__overlay__right-btns-white">
                    {t("Связаться с нами")}
                  </button>
                  <span className="hero__overlay__right-btns-red">
                    <FaAngleRight />
                  </span>
                </NavLink>
              </MagneticBtn>

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
              <p className="hero__bottom__info-stats-text">{t("Деталей в день")}</p>
            </div>
            <div className="hero__bottom__info-stats">
              <AnimatedStats endValue={65} text="%" />
              <p className="hero__bottom__info-stats-text">{t("Доля экспорта")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__line" />
    </>
  );
};

export default Hero;
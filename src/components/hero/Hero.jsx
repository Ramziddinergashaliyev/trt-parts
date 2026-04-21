// import React, { useState, useEffect, useRef } from "react";

// import "./hero.scss";
// import icon from "../../assets/img/hero.png";
// import poster from "../../assets/img/preview.webp";
// import { FaAngleRight } from "react-icons/fa6";
// import video1 from "../../assets/video/bgvideo.mp4";
// import { NavLink } from "react-router-dom";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import AnimatedStats from "../animatedState/AnimatedStats";
// import { useTranslation } from "react-i18next";

// const SplitText = ({ text, delay = 0 }) => {
//   const words = text.split(" ");

//   return (
//     <>
//       {words.map((word, wi) => (
//         <span key={wi} className="split-word">
//           {word.split("").map((char, ci) => (
//             <motion.span
//               key={ci}
//               className="split-char"
//               initial={{ y: "120%", opacity: 0, rotateX: -80 }}
//               animate={{ y: "0%", opacity: 1, rotateX: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: delay + wi * 0.07 + ci * 0.025,
//                 ease: [0.215, 0.61, 0.355, 1],
//               }}>
//               {char}
//             </motion.span>
//           ))}
//           {wi < words.length - 1 && <span className="split-char">&nbsp;</span>}
//         </span>
//       ))}
//     </>
//   );
// };

// const MagneticBtn = ({ children }) => {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const sx = useSpring(x, { stiffness: 180, damping: 16 });
//   const sy = useSpring(y, { stiffness: 180, damping: 16 });

//   const onMove = (e) => {
//     const rect = ref.current.getBoundingClientRect();
//     x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
//     y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
//   };

//   const onLeave = () => { x.set(0); y.set(0); };

//   return (
//     <motion.div ref={ref} style={{ x: sx, y: sy }}
//       onMouseMove={onMove} onMouseLeave={onLeave}>
//       {children}
//     </motion.div>
//   );
// };

// const CursorGlow = () => { };

// const Grain = () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const c = ref.current;
//     const ctx = c.getContext("2d");
//     let raf;
//     const draw = () => {
//       c.width = window.innerWidth;
//       c.height = window.innerHeight;
//       const img = ctx.createImageData(c.width, c.height);
//       const d = img.data;

//       for (let i = 0; i < d.length; i += 4) {
//         const v = Math.random() * 255;
//         d[i] = d[i + 1] = d[i + 2] = v;
//         d[i + 3] = 15;
//       }

//       ctx.putImageData(img, 0, 0);
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   return <canvas ref={ref} className="hero__grain" />;
// };

// const Hero = () => {
//   const { t, i18n } = useTranslation();
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     i18n.on("languageChanged", () => { });
//     return () => i18n.off("languageChanged", () => { });
//   }, [i18n]);

//   useEffect(() => {
//     const tid = setTimeout(() => setReady(true), 100);
//     return () => clearTimeout(tid);
//   }, []);

//   useEffect(() => {
//     const tid = setTimeout(() => setVideoLoaded(true), 4000);
//     return () => clearTimeout(tid);
//   }, []);

//   return (
//     <>
//       <div className="hero">
//         <Grain />
//         <CursorGlow />

//         <div className="hero__slide">
//           <div className={`hero__preview${videoLoaded ? " hero__preview--hidden" : ""}`}>
//             <img src={poster} alt="preview" />
//           </div>

//           <video
//             className="hero__slide__video"
//             autoPlay muted loop playsInline preload="auto" poster={poster}
//             onLoadedData={() => setVideoLoaded(true)}
//             onCanPlay={() => setVideoLoaded(true)}
//           >
//             <source src={video1} type="video/mp4" />
//             {t("Ваш браузер")}
//           </video>

//           <div className="hero__overlay container">
//             <div className="hero__overlay__left">

//               <motion.div className="hero__overlay__left-label-wrap"
//                 initial={{ clipPath: "inset(0 100% 0 0)" }}
//                 animate={{ clipPath: "inset(0 0% 0 0)" }}
//                 transition={{ duration: 0.75, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}>
//                 <p className="hero__overlay__left-text">{t("АВТОЗАПЧАСТИ")}</p>
//               </motion.div>

//               {ready && (
//                 <h2 className="hero__overlay__left-title">
//                   <SplitText text={t("Глобальные стандарты качества")} delay={0.3} />
//                 </h2>
//               )}
//             </div>

//             <motion.div className="hero__overlay__right"
//               initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
//               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               transition={{ duration: 0.85, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             >

//               <MagneticBtn>
//                 <NavLink to="/contact" aria-label="Связаться с нами"
//                   className="hero__overlay__right-btns">
//                   <button className="hero__overlay__right-btns-white">
//                     {t("Связаться с нами")}
//                   </button>
//                   <span className="hero__overlay__right-btns-red">
//                     <FaAngleRight />
//                   </span>
//                 </NavLink>
//               </MagneticBtn>

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
//               <p className="hero__bottom__info-stats-text">{t("Деталей в день")}</p>
//             </div>

//             <div className="hero__bottom__info-stats">
//               <AnimatedStats endValue={65} text="%" />
//               <p className="hero__bottom__info-stats-text">{t("Доля экспорта")}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="hero__line" />
//     </>
//   );
// };

// export default Hero;


import React, { useState, useEffect, useRef } from "react";
import "./hero.scss";
import icon from "../../assets/img/hero.png";
import poster from "../../assets/img/preview.webp";
import { FaAngleRight } from "react-icons/fa6";
import video1 from "../../assets/video/bgvideo.mp4";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import AnimatedStats from "../animatedState/AnimatedStats";
import { useTranslation } from "react-i18next";

/* ─── Split Text ─────────────────────────────────────────────── */
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
                duration: 0.65,
                delay: delay + wi * 0.08 + ci * 0.028,
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

/* ─── Magnetic Button ─────────────────────────────────────────── */
const MagneticBtn = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  );
};

/* ─── Grain Canvas ────────────────────────────────────────────── */
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
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = 13;
      }
      ctx.putImageData(img, 0, 0);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="hero__grain" />;
};

/* ─── Particle Canvas ─────────────────────────────────────────── */
const Particles = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    let raf;
    const particles = [];

    const init = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
      particles.length = 0;
      for (let i = 0; i < 70; i++) {
        particles.push({
          x: Math.random() * c.width,
          y: Math.random() * c.height,
          r: Math.random() * 1.6 + 0.3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -Math.random() * 0.45 - 0.1,
          opacity: Math.random() * 0.55 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -5) { p.y = c.height + 5; p.x = Math.random() * c.width; }
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(208,1,1,${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);
  return <canvas ref={ref} className="hero__particles" />;
};

/* ─── Scan Line ───────────────────────────────────────────────── */
const ScanLine = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let y = -2;
    let raf;
    const anim = () => {
      y += 0.9;
      if (y > 600) y = -2;
      el.style.top = y + "px";
      el.style.opacity = y > 0 && y < 600 ? "1" : "0";
      raf = requestAnimationFrame(anim);
    };
    anim();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <div ref={ref} className="hero__scanline" />;
};

/* ─── Hero ────────────────────────────────────────────────────── */
const Hero = () => {
  const { t, i18n } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.on("languageChanged", () => { });
    return () => i18n.off("languageChanged", () => { });
  }, [i18n]);

  useEffect(() => {
    const tid = setTimeout(() => setReady(true), 120);
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

          <Particles />

          <ScanLine />

          <svg className="hero__geo" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="160" cy="160" r="130" strokeWidth="0.6" fill="none" />
            <circle cx="160" cy="160" r="90" strokeWidth="0.6" fill="none" />
            <circle cx="160" cy="160" r="45" strokeWidth="0.6" fill="none" />
            <line x1="30" y1="160" x2="290" y2="160" strokeWidth="0.6" />
            <line x1="160" y1="30" x2="160" y2="290" strokeWidth="0.6" />
          </svg>

          <div className="hero__overlay container">
            <div className="hero__overlay__left">

              <motion.div className="hero__overlay__left-label-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}>
                <p className="hero__overlay__left-text">{t("АВТОЗАПЧАСТИ")}</p>
              </motion.div>

              {ready && (
                <h2 className="hero__overlay__left-title">
                  <SplitText text={t("Глобальные стандарты качества")} delay={0.35} />
                </h2>
              )}

              <motion.span
                className="hero__overlay__left-rule"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 1.2, ease: [0.77, 0, 0.175, 1] }}
              />
            </div>

            <motion.div className="hero__overlay__right"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
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

          <motion.div
            className="hero__bottom__info container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__bottom__info-stats">
              <AnimatedStats endValue={12000} text="+" />
              <p className="hero__bottom__info-stats-text">{t("Деталей в день")}</p>
            </div>

            <div className="hero__bottom__info-divider" />

            <div className="hero__bottom__info-stats">
              <AnimatedStats endValue={65} text="%" />
              <p className="hero__bottom__info-stats-text">{t("Доля экспорта")}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Red line */}
      <motion.div
        className="hero__line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 1.3, ease: [0.77, 0, 0.175, 1] }}
      />
    </>
  );
};

export default Hero;
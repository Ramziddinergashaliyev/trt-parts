// import React, { useEffect, useState, memo, useRef } from "react";
// import { useParams } from "react-router-dom";
// import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
// import Tabs from "../../components/Tab/Tab";
// import Application from "../../components/Application/Application";
// import Information from "../../components/Information/Information";
// import Characteristics from "../../components/Characteristics/Characteristics";
// import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
// import { useGetProductByIdQuery } from "../../context/api/productApi";
// import { useTranslation } from "react-i18next";
// import img from "../../assets/img/psc.png";

// import "./single.scss";

// const Single = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = useGetProductByIdQuery(id);

//   const { t, i18n } = useTranslation();
//   const [activeTab, setActiveTab] = useState("reviews");
//   const [selectedImage, setSelectedImage] = useState("");
//   const [hoveredImage, setHoveredImage] = useState(null);
//   const [canScrollUp, setCanScrollUp] = useState(false);
//   const [canScrollDown, setCanScrollDown] = useState(false);
//   const thumbnailContainerRef = useRef(null);
//   const currentLang = i18n.language;

//   const images = data?.images?.filter(img => img?.trim()) || [];
//   const hasImages = images.length > 0;

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     if (data?.images?.length > 0) {
//       setSelectedImage(data.images[0]);
//     }
//   }, [data]);

//   const checkScrollButtons = () => {
//     const container = thumbnailContainerRef.current;
//     if (container) {
//       setCanScrollUp(container.scrollTop > 0);
//       setCanScrollDown(
//         container.scrollTop < container.scrollHeight - container.clientHeight
//       );
//     }
//   };

//   useEffect(() => {
//     checkScrollButtons();
//     const container = thumbnailContainerRef.current;
//     if (container) {
//       container.addEventListener('scroll', checkScrollButtons);
//       return () => container.removeEventListener('scroll', checkScrollButtons);
//     }
//   }, [images]);

//   const scrollUp = () => {
//     const container = thumbnailContainerRef.current;
//     if (container) {
//       container.scrollBy({
//         top: -110,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollDown = () => {
//     const container = thumbnailContainerRef.current;
//     if (container) {
//       container.scrollBy({
//         top: 110,
//         behavior: 'smooth'
//       });
//     }
//   };

//   if (isLoading) return <LoadingSingle />;
//   if (error || !data) return <p className="error">{t("Произошла ошибка")}</p>;

//   return (
//     <div className="detail">
//       <div className="container">
//         <div className="detail__cards">
//           <div className="detail__card__img">

//             <div className="thumbnail-wrapper">

//               {images.length > 4 && (
//                 <button
//                   className={`scroll-button scroll-button-up ${!canScrollUp ? 'disabled' : ''}`}
//                   onClick={scrollUp}
//                   disabled={!canScrollUp}>
//                   <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
//                     <path d="M10 0L20 12H0L10 0Z" fill="currentColor" />
//                   </svg>
//                 </button>
//               )}

//               <div className="detail__card__imgs" ref={thumbnailContainerRef}>
//                 {hasImages ? (
//                   images.map((img, index) => (
//                     <div
//                       key={index}
//                       className={`thumbnail ${selectedImage === img ? "active" : ""}`}
//                       onClick={() => setSelectedImage(img)}
//                       onMouseEnter={() => setHoveredImage(img)}
//                       onMouseLeave={() => setHoveredImage(null)}
//                     >
//                       <img src={img} alt={`thumb-${index}`} />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="thumbnail active">
//                     <img src={img} alt="no-image" />
//                   </div>
//                 )}
//               </div>

//               {images.length > 4 && (
//                 <button
//                   className={`scroll-button scroll-button-down ${!canScrollDown ? 'disabled' : ''}`}
//                   onClick={scrollDown}
//                   disabled={!canScrollDown}
//                 >
//                   <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
//                     <path d="M10 12L0 0H20L10 12Z" fill="currentColor" />
//                   </svg>
//                 </button>
//               )}

//             </div>

//             <div className="detail__img">
//               <img
//                 src={
//                   hasImages
//                     ? hoveredImage || selectedImage || images[0]
//                     : img
//                 }
//                 alt="Mahsulot rasmi"
//               />
//             </div>

//           </div>

//           <div className="detail__card__info">
//             <h3 className="detail__title">
//               {currentLang === "rus"
//                 ? data?.translations?.ru?.name
//                 : data?.translations?.en?.name}
//             </h3>

//             <ul className="detail__card__info-list">
//               {data?.trtCode && (
//                 <li className="detail__card__info-item">
//                   {t("TRT-код")}: <span>{data.trtCode}</span>
//                 </li>
//               )}

//               {data?.carName && (
//                 <li className="detail__card__info-item">
//                   {t("Марка")}: <span>{data.carName[0]}</span>
//                 </li>
//               )}

//               {data?.model?.length > 0 && (
//                 <li className="detail__card__info-item">
//                   {t("Модель")}: <span>{data.model[0]}</span>
//                 </li>
//               )}

//               {data?.oem?.length > 0 && (
//                 <li className="detail__card__info-item">
//                   {t("oem")}: <span>{data.oem[0]}</span>
//                 </li>
//               )}

//               {data?.years && (
//                 <li className="detail__card__info-item">
//                   {t("Год")}: <span>{data.years[0]}</span>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <Tabs activeTab={activeTab} onTabClick={setActiveTab} />

//       <div className="tab-content">
//         <div className="tab-content-text container">
//           {activeTab === "reviews" && <Characteristics data={data} />}
//           {activeTab === "Application" && <Application data={data} />}
//           {activeTab === "Information" && <Information data={data} />}
//         </div>
//       </div>

//       <div className="container">
//         <HandleSwiper categoryId={data?.categories} currentProductId={id} />
//       </div>
//     </div>
//   );

// };

// export default memo(Single);


import React, { useEffect, useState, memo, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
import Tabs from "../../components/Tab/Tab";
import Application from "../../components/Application/Application";
import Information from "../../components/Information/Information";
import Characteristics from "../../components/Characteristics/Characteristics";
import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useTranslation } from "react-i18next";
import fallbackImg from "../../assets/img/psc.png";
import { motion, AnimatePresence } from "framer-motion";
import { getIdFromSlug } from "../../utils/slugHelper";
import "./single.scss";

const Lightbox = ({ src, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.button
        className="lightbox__close"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.12, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Закрыть"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <line
            x1="1" y1="1" x2="15" y2="15"
            stroke="white" strokeWidth="2.2" strokeLinecap="round"
          />
          <line
            x1="15" y1="1" x2="1" y2="15"
            stroke="white" strokeWidth="2.2" strokeLinecap="round"
          />
        </svg>
      </motion.button>

      <motion.div
        className="lightbox__box"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 16 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={src} alt="Увеличенное изображение" />
      </motion.div>
    </motion.div>
  );
};

const ScrollBtn = ({ direction, disabled, onClick }) => (
  <button
    className={`scroll-btn${disabled ? " disabled" : ""}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "up" ? "Вверх" : "Вниз"}
  >
    <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
      {direction === "up" ? (
        <path d="M6.5 0L13 8H0L6.5 0Z" fill="currentColor" />
      ) : (
        <path d="M6.5 8L0 0H13L6.5 8Z" fill="currentColor" />
      )}
    </svg>
  </button>
);

const Single = () => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);

  const { data, isLoading, error } = useGetProductByIdQuery(id);
  const { t, i18n } = useTranslation();

  const [activeTab, setActiveTab] = useState("reviews");
  const [selectedImage, setSelectedImage] = useState("");
  const [hoveredImage, setHoveredImage] = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const thumbRef = useRef(null);
  const currentLang = i18n.language;

  const images = data?.images?.filter((i) => i?.trim()) || [];
  const hasImages = images.length > 0;
  const displayName =
    currentLang === "rus"
      ? data?.translations?.ru?.name
      : data?.translations?.en?.name;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data?.images?.length > 0) setSelectedImage(data.images[0]);
  }, [data]);

  const checkScroll = useCallback(() => {
    const c = thumbRef.current;
    if (!c) return;
    setCanScrollUp(c.scrollTop > 0);
    setCanScrollDown(c.scrollTop < c.scrollHeight - c.clientHeight - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const c = thumbRef.current;
    if (c) {
      c.addEventListener("scroll", checkScroll);
      return () => c.removeEventListener("scroll", checkScroll);
    }
  }, [images, checkScroll]);

  const scrollUp = () =>
    thumbRef.current?.scrollBy({ top: -110, behavior: "smooth" });
  const scrollDown = () =>
    thumbRef.current?.scrollBy({ top: 110, behavior: "smooth" });

  const openLightbox = () =>
    setLightboxSrc(
      hoveredImage || selectedImage || (hasImages ? images[0] : fallbackImg)
    );
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  if (isLoading) return <LoadingSingle />;
  if (error || !data) return <p className="detail__error">{t("Произошла ошибка")}</p>;

  return (
    <>
      <AnimatePresence>
        {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
      </AnimatePresence>

      <div className="detail">
        <div className="container">
          <motion.nav
            className="detail__breadcrumb"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="cat">{t("Каталог")}</span>
            <span className="sep">/</span>
            <span className="cur">{displayName}</span>
          </motion.nav>

          <div className="detail__cards">
            <motion.div
              className="detail__card__img"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="thumbnail-wrapper">
                {images.length > 4 && (
                  <ScrollBtn
                    direction="up"
                    disabled={!canScrollUp}
                    onClick={scrollUp}
                  />
                )}
                <div className="detail__card__imgs" ref={thumbRef}>
                  {hasImages ? (
                    images.map((src, i) => (
                      <div
                        key={i}
                        className={`thumbnail${selectedImage === src ? " active" : ""}`}
                        onClick={() => setSelectedImage(src)}
                        onMouseEnter={() => setHoveredImage(src)}
                        onMouseLeave={() => setHoveredImage(null)}
                      >
                        <img src={src} alt={`thumb-${i}`} />
                      </div>
                    ))
                  ) : (
                    <div className="thumbnail active">
                      <img src={fallbackImg} alt="no-img" />
                    </div>
                  )}
                </div>

                {images.length > 4 && (
                  <ScrollBtn
                    direction="down"
                    disabled={!canScrollDown}
                    onClick={scrollDown}
                  />
                )}

              </div>

              <div
                className="detail__img"
                onClick={openLightbox}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox()}
                aria-label={t("Нажмите для увеличения")}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={hoveredImage || selectedImage}
                    src={
                      hasImages
                        ? hoveredImage || selectedImage || images[0]
                        : fallbackImg
                    }
                    alt="Mahsulot"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                <div className="detail__img__hint">
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2.2" strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  {t("Увеличить")}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="detail__card__info"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="detail__title">{displayName}</h3>

              <ul className="detail__card__info-list">
                {data?.trtCode && (
                  <li className="detail__card__info-item">
                    <span className="detail__info-label">{t("TRT-код")}</span>
                    <span className="detail__info-val">{data.trtCode}</span>
                  </li>
                )}
                {data?.carName && (
                  <li className="detail__card__info-item">
                    <span className="detail__info-label">{t("Марка")}</span>
                    <span className="detail__info-val">{data.carName[0]}</span>
                  </li>
                )}
                {data?.model?.length > 0 && (
                  <li className="detail__card__info-item">
                    <span className="detail__info-label">{t("Модель")}</span>
                    <span className="detail__info-val">{data.model[0]}</span>
                  </li>
                )}
                {data?.oem?.length > 0 && (
                  <li className="detail__card__info-item">
                    <span className="detail__info-label">{t("OEM")}</span>
                    <span className="detail__info-val">{data.oem[0]}</span>
                  </li>
                )}
                {data?.years && (
                  <li className="detail__card__info-item">
                    <span className="detail__info-label">{t("Год")}</span>
                    <span className="detail__info-val">{data.years[0]}</span>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>

        <Tabs activeTab={activeTab} onTabClick={setActiveTab} />

        <div className="tab-content">
          <div className="tab-content-text">
            {activeTab === "reviews" && <Characteristics data={data} />}
            {activeTab === "Application" && <Application data={data} />}
            {activeTab === "Information" && <Information data={data} />}
          </div>
        </div>

        <div className="container">
          <HandleSwiper
            categoryId={data?.categories}
            currentProductId={data?.id}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Single);



// import React, { useEffect, useState, memo, useRef, useCallback } from "react";
// import { useParams } from "react-router-dom";
// import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
// import Tabs from "../../components/Tab/Tab";
// import Application from "../../components/Application/Application";
// import Information from "../../components/Information/Information";
// import Characteristics from "../../components/Characteristics/Characteristics";
// import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
// import { useGetProductByIdQuery } from "../../context/api/productApi";
// import { useTranslation } from "react-i18next";
// import fallbackImg from "../../assets/img/psc.png";
// import { motion, AnimatePresence } from "framer-motion";

// import "./single.scss";

// const Lightbox = ({ src, onClose }) => {
//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       className="lightbox"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.25 }}
//       onClick={onClose}
//     >
//       <motion.button
//         className="lightbox__close"
//         onClick={onClose}
//         initial={{ opacity: 0, scale: 0.6 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.12, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
//         aria-label="Закрыть"
//       >
//         <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//           <line x1="1" y1="1" x2="15" y2="15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
//           <line x1="15" y1="1" x2="1" y2="15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
//         </svg>
//       </motion.button>

//       <motion.div
//         className="lightbox__box"
//         onClick={(e) => e.stopPropagation()}
//         initial={{ opacity: 0, scale: 0.85, y: 30 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 16 }}
//         transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <img src={src} alt="Увеличенное изображение" />
//       </motion.div>
//     </motion.div>
//   );
// };

// const ScrollBtn = ({ direction, disabled, onClick }) => (
//   <button
//     className={`scroll-btn${disabled ? " disabled" : ""}`}
//     onClick={onClick}
//     disabled={disabled}
//     aria-label={direction === "up" ? "Вверх" : "Вниз"}
//   >
//     <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
//       {direction === "up"
//         ? <path d="M6.5 0L13 8H0L6.5 0Z" fill="currentColor" />
//         : <path d="M6.5 8L0 0H13L6.5 8Z" fill="currentColor" />}
//     </svg>
//   </button>
// );

// const Single = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = useGetProductByIdQuery(id);
//   const { t, i18n } = useTranslation();

//   const [activeTab, setActiveTab] = useState("reviews");
//   const [selectedImage, setSelectedImage] = useState("");
//   const [hoveredImage, setHoveredImage] = useState(null);
//   const [lightboxSrc, setLightboxSrc] = useState(null);
//   const [canScrollUp, setCanScrollUp] = useState(false);
//   const [canScrollDown, setCanScrollDown] = useState(false);
//   const thumbRef = useRef(null);
//   const currentLang = i18n.language;

//   const images = data?.images?.filter((i) => i?.trim()) || [];
//   const hasImages = images.length > 0;
//   const displayName = currentLang === "rus"
//     ? data?.translations?.ru?.name
//     : data?.translations?.en?.name;

//   useEffect(() => { window.scrollTo(0, 0); }, []);
//   useEffect(() => { if (data?.images?.length > 0) setSelectedImage(data.images[0]); }, [data]);

//   const checkScroll = useCallback(() => {
//     const c = thumbRef.current;
//     if (!c) return;
//     setCanScrollUp(c.scrollTop > 0);
//     setCanScrollDown(c.scrollTop < c.scrollHeight - c.clientHeight - 1);
//   }, []);

//   useEffect(() => {
//     checkScroll();
//     const c = thumbRef.current;
//     if (c) { c.addEventListener("scroll", checkScroll); return () => c.removeEventListener("scroll", checkScroll); }
//   }, [images, checkScroll]);

//   const scrollUp = () => thumbRef.current?.scrollBy({ top: -110, behavior: "smooth" });
//   const scrollDown = () => thumbRef.current?.scrollBy({ top: 110, behavior: "smooth" });
//   const openLightbox = () => setLightboxSrc(hoveredImage || selectedImage || (hasImages ? images[0] : fallbackImg));
//   const closeLightbox = useCallback(() => setLightboxSrc(null), []);

//   if (isLoading) return <LoadingSingle />;
//   if (error || !data) return <p className="detail__error">{t("Произошла ошибка")}</p>;

//   return (
//     <>
//       <AnimatePresence>
//         {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
//       </AnimatePresence>

//       <div className="detail">
//         <div className="container">

//           <motion.nav
//             className="detail__breadcrumb"
//             initial={{ opacity: 0, y: -6 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <span className="cat">{t("Каталог")}</span>
//             <span className="sep">/</span>
//             <span className="cur">{displayName}</span>
//           </motion.nav>

//           <div className="detail__cards">

//             <motion.div
//               className="detail__card__img"
//               initial={{ opacity: 0, x: -28 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <div className="thumbnail-wrapper">
//                 {images.length > 4 && <ScrollBtn direction="up" disabled={!canScrollUp} onClick={scrollUp} />}
//                 <div className="detail__card__imgs" ref={thumbRef}>
//                   {hasImages ? images.map((src, i) => (
//                     <div
//                       key={i}
//                       className={`thumbnail${selectedImage === src ? " active" : ""}`}
//                       onClick={() => setSelectedImage(src)}
//                       onMouseEnter={() => setHoveredImage(src)}
//                       onMouseLeave={() => setHoveredImage(null)}
//                     >
//                       <img src={src} alt={`thumb-${i}`} />
//                     </div>
//                   )) : (
//                     <div className="thumbnail active">
//                       <img src={fallbackImg} alt="no-img" />
//                     </div>
//                   )}
//                 </div>
//                 {images.length > 4 && <ScrollBtn direction="down" disabled={!canScrollDown} onClick={scrollDown} />}
//               </div>

//               <div
//                 className="detail__img"
//                 onClick={openLightbox}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => e.key === "Enter" && openLightbox()}
//                 aria-label={t("Нажмите для увеличения")}
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={hoveredImage || selectedImage}
//                     src={hasImages ? hoveredImage || selectedImage || images[0] : fallbackImg}
//                     alt="Mahsulot"
//                     initial={{ opacity: 0, scale: 0.97 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
//                   />
//                 </AnimatePresence>

//                 <div className="detail__img__hint">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//                     stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
//                     <circle cx="11" cy="11" r="8" />
//                     <line x1="21" y1="21" x2="16.65" y2="16.65" />
//                     <line x1="11" y1="8" x2="11" y2="14" />
//                     <line x1="8" y1="11" x2="14" y2="11" />
//                   </svg>
//                   {t("Увеличить")}
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="detail__card__info"
//               initial={{ opacity: 0, x: 28 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <h3 className="detail__title">{displayName}</h3>

//               <ul className="detail__card__info-list">

//                 {data?.trtCode && (
//                   <li className="detail__card__info-item">
//                     <span className="detail__info-label">{t("TRT-код")}</span>
//                     <span className="detail__info-val">{data.trtCode}</span>
//                   </li>
//                 )}

//                 {data?.carName && (
//                   <li className="detail__card__info-item">
//                     <span className="detail__info-label">{t("Марка")}</span>
//                     <span className="detail__info-val">{data.carName[0]}</span>
//                   </li>
//                 )}

//                 {data?.model?.length > 0 && (
//                   <li className="detail__card__info-item">
//                     <span className="detail__info-label">{t("Модель")}</span>
//                     <span className="detail__info-val">{data.model[0]}</span>
//                   </li>
//                 )}

//                 {data?.oem?.length > 0 && (
//                   <li className="detail__card__info-item">
//                     <span className="detail__info-label">{t("OEM")}</span>
//                     <span className="detail__info-val">{data.oem[0]}</span>
//                   </li>
//                 )}

//                 {data?.years && (
//                   <li className="detail__card__info-item">
//                     <span className="detail__info-label">{t("Год")}</span>
//                     <span className="detail__info-val">{data.years[0]}</span>
//                   </li>
//                 )}

//               </ul>
//             </motion.div>

//           </div>
//         </div>

//         <Tabs activeTab={activeTab} onTabClick={setActiveTab} />

//         <div className="tab-content">
//           <div className="tab-content-text">
//             {activeTab === "reviews" && <Characteristics data={data} />}
//             {activeTab === "Application" && <Application data={data} />}
//             {activeTab === "Information" && <Information data={data} />}
//           </div>
//         </div>

//         <div className="container">
//           <HandleSwiper categoryId={data?.categories} currentProductId={id} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default memo(Single);
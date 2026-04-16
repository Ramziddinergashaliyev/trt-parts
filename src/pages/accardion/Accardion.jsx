// import React, { useState, useEffect, memo } from "react";
// import "./accardion.scss";
// import { ACCARDION, ACCARDIONEN } from "../../static";
// import { FiPlus } from "react-icons/fi";
// import { RiCloseFill } from "react-icons/ri";
// import bgVideo from "../../assets/video/acc.webm";
// import { useTranslation } from "react-i18next";

// const Accardion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const currentList = i18n.languages[0] === "rus" ? ACCARDION : ACCARDIONEN;

//   return (
//     <div className="accardion">

//       <video
//         className="accardion__video-bg"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//       >
//         <source src={bgVideo} type="video/webm" />
//       </video>

//       <div className="accardion__list">

//         <h3 className="accardion__title">{t("Дистрибьюторы")}</h3>

//         <ul className="accardion__list-info container">
//           <p className="accardion__list-info-text">{t("Список")}</p>

//           {currentList?.map((el, index) => (
//             <li key={el?.id} className="accardion__item">
//               <div
//                 className="accardion__header"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <p className="accardion__header__country">{el?.country}</p>
//                 <span className="accardion__icon">
//                   <button className="accardion-btn" type="button">
//                     {activeIndex === index ? <RiCloseFill /> : <FiPlus />}
//                   </button>
//                 </span>
//               </div>

//               <div
//                 className={`accardion__content ${activeIndex === index ? "accardion__content--open" : ""
//                   }`}>

//                 <div className="accardion__content-inner">
//                   <p className="accardion__content__name">{el?.name}</p>
//                   <p className="accardion__content__title">{el?.title}</p>
//                   <a
//                     className="accardion__content__number"
//                     href={`tel:${el?.number}`}
//                   >
//                     {el?.number}
//                   </a>
//                 </div>

//               </div>
//             </li>
//           ))}
//         </ul>

//       </div>

//     </div>
//   );
// };

// export default memo(Accardion);


// Accardion.jsx
import React, { useState, useEffect, memo } from "react";
import "./accardion.scss";
import { ACCARDION, ACCARDIONEN } from "../../static";
import { FiPlus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import bgVideo from "../../assets/video/acc.webm";
import { useTranslation } from "react-i18next";

const Accardion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const currentList = i18n.languages[0] === "rus" ? ACCARDION : ACCARDIONEN;

  return (
    <div className="accardion">
      <video
        className="accardion__video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={bgVideo} type="video/webm" />
      </video>

      <div className="accardion__list">
        <h3 className="accardion__title">{t("Дистрибьюторы")}</h3>

        <ul className="accardion__list-info container">
          <p className="accardion__list-info-text">{t("Список")}</p>

          {currentList?.map((el, index) => (
            <li key={el?.id} className="accardion__item">
              <div
                className="accardion__header"
                onClick={() => toggleAccordion(index)}
              >
                <p className="accardion__header__country">{el?.country}</p>
                <span className="accardion__icon">
                  <button className="accardion-btn" type="button">
                    {activeIndex === index ? <RiCloseFill /> : <FiPlus />}
                  </button>
                </span>
              </div>

              <div
                className={`accardion__content ${activeIndex === index ? "accardion__content--open" : ""
                  }`}
              >
                {el?.distributors?.map((dist, i) => (
                  <div
                    key={i}
                    className={`accardion__content-inner ${el?.distributors?.length > 1 &&
                      i < el.distributors.length - 1
                      ? "accardion__content-inner--bordered"
                      : ""
                      }`}
                  >
                    <p className="accardion__content__name">{dist?.name}</p>
                    <p className="accardion__content__title">{dist?.title}</p>
                    <a
                      className="accardion__content__number"
                      href={`tel:${dist?.number}`}
                    >
                      {dist?.number}
                    </a>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default memo(Accardion);
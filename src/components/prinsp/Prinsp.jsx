// import React from "react";
// import { FaAngleRight } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// import "./prinsp.scss";
// import Service from "../service/Service";

// const Prinsp = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="prinsp container" aria-labelledby="prinsp-title">
//       <div className="prinsp__top">
//         <div className="prinsp__top__left">
//           <h2 id="prinsp-title" className="prinsp__top__left-title">
//             {t("quality_title")} <br />
//             <span>{t("quality_subtitle")}</span>
//           </h2>
//         </div>

//         <NavLink
//           to="/company"
//           className="prinsp__top__right"
//           aria-label={t("about_company")}
//         >
//           <span className="prinsp__top__right-white">{t("about_company")}</span>
//           <span className="prinsp__top__right-red" aria-hidden="true">
//             <FaAngleRight />
//           </span>
//         </NavLink>
//       </div>

//       <Service />
//     </section>
//   );
// };

// export default Prinsp;


import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./prinsp.scss";
import Service from "../service/Service";

const Prinsp = () => {
  const { t } = useTranslation();

  return (
    <section className="prinsp container">
      <div
        className="prinsp__top"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="prinsp__left">
          <h2 className="prinsp__title">
            {t("quality_title")} <br />
            <span>{t("quality_subtitle")}</span>
          </h2>
        </div>

        <NavLink to="/company" className="prinsp__btn">
          <span className="prinsp__btn-text">
            {t("about_company")}
          </span>
          <span className="prinsp__btn-icon">
            <FaAngleRight />
          </span>
        </NavLink>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Service />
      </div>
    </section>
  );
};

export default Prinsp;
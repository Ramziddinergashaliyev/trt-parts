// import React from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import { useGetCategoriesQuery } from "../../context/api/categoryApi";
// import { useTranslation } from "react-i18next";
// import CategoryLoading from "../categoryLoading/CategoryLoading";
// import "./catalogCard.scss";

// const CatalogCard = () => {
//   const { data, isLoading } = useGetCategoriesQuery();
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language;

//   if (isLoading) return <CategoryLoading />;

//   return data ? (
//     <div className="catalogCard">
//       <div className="catalogCard__box" data-aos="zoom-in-down">

//         {data?.slice(0, 9)?.map((item) => (
//           <NavLink
//             key={item.id}
//             to={`/${(currentLang === "rus" ? item?.translations?.ru?.name : item?.translations?.en?.name)?.toLowerCase().replace(/\s+/g, '-')}/${item?.id}`}>
//             <div
//               style={{
//                 backgroundImage: `url(${item?.images})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "top right",
//                 backgroundSize: "300px auto",
//               }}
//               className="catalogCard__box-item">

//               <div className="catalogCard__box-item-card">
//                 <div className="catalogCard__box-item-card-link">
//                   <span className="catalogCard__box-item-card-link-btn">
//                     <FaArrowRight />
//                   </span>
//                 </div>

//                 <div className="catalogCard__box-info">
//                   <h3 className="catalogCard__box-info-title">
//                     {currentLang === "rus"
//                       ? item?.translations?.ru?.name
//                       : item?.translations?.en?.name}
//                   </h3>
//                 </div>
//               </div>

//             </div>
//           </NavLink>
//         ))}

//       </div>
//     </div>
//   ) : (
//     <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "500" }}>проблема с сервером</p>
//   );
// };

// export default CatalogCard;


import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";
import { useTranslation } from "react-i18next";
import CategoryLoading from "../categoryLoading/CategoryLoading";
import "./catalogCard.scss";

const CatalogCard = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isWide, setIsWide] = useState(window.innerWidth > 1460);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 1460);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) return <CategoryLoading />;

  return data ? (
    <div className="catalogCard">
      <div className="catalogCard__box" data-aos="zoom-in-down">
        {data?.slice(0, 9)?.map((item, index) => (
          <NavLink
            key={item.id}
            to={`/${(currentLang === "rus" ? item?.translations?.ru?.name : item?.translations?.en?.name)?.toLowerCase().replace(/\s+/g, '-')}/${item?.id}`}>
            <div
              style={{
                backgroundImage: `url(${item?.images})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
                backgroundSize: index === isWide
                  ? (6 ? "500px auto" : "550px auto")
                  : (6 ? "300px auto" : "350px auto"),
              }}
              className="catalogCard__box-item">

              <div className="catalogCard__box-item-card">
                <div className="catalogCard__box-item-card-link">
                  <span className="catalogCard__box-item-card-link-btn">
                    <FaArrowRight />
                  </span>
                </div>

                <div className="catalogCard__box-info">
                  <h3 className="catalogCard__box-info-title">
                    {currentLang === "rus"
                      ? item?.translations?.ru?.name
                      : item?.translations?.en?.name}
                  </h3>
                </div>
              </div>

            </div>
          </NavLink>
        ))}
      </div>
    </div>
  ) : (
    <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "500" }}>проблема с сервером</p>
  );
};

export default CatalogCard;


// import React from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import { useGetCategoriesQuery } from "../../context/api/categoryApi";
// import { useTranslation } from "react-i18next";
// import CategoryLoading from "../categoryLoading/CategoryLoading";
// import "./catalogCard.scss";

// const CatalogCard = () => {
//   const { data, isLoading } = useGetCategoriesQuery();
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language;

//   if (isLoading) return <CategoryLoading />;

//   return data ? (
//     <div className="catalogCard">
//       <div className="catalogCard__box" data-aos="zoom-in-down">

//         {data?.slice(0, 9)?.map((item, index) => (
//           <NavLink
//             key={item.id}
//             to={`/${(currentLang === "rus" ? item?.translations?.ru?.name : item?.translations?.en?.name)?.toLowerCase().replace(/\s+/g, '-')}/${item?.id}`}>
//             <div
//               style={{
//                 backgroundImage: `url(${item?.images})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "top right",
//                 backgroundSize: index === 6 ? "550px auto" : "350px auto",
//               }}
//               className="catalogCard__box-item">

//               <div className="catalogCard__box-item-card">
//                 <div className="catalogCard__box-item-card-link">
//                   <span className="catalogCard__box-item-card-link-btn">
//                     <FaArrowRight />
//                   </span>
//                 </div>

//                 <div className="catalogCard__box-info">
//                   <h3 className="catalogCard__box-info-title">
//                     {currentLang === "rus"
//                       ? item?.translations?.ru?.name
//                       : item?.translations?.en?.name}
//                   </h3>
//                 </div>
//               </div>

//             </div>
//           </NavLink>
//         ))}

//       </div>
//     </div>
//   ) : (
//     <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "500" }}>проблема с сервером</p>
//   );
// };

// export default CatalogCard;
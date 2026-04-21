// import React from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import { useGetCategoriesQuery } from "../../context/api/categoryApi";
// import { useTranslation } from "react-i18next";

// import "./catalogCard.scss";
// import { Catalog } from "../../static";

// const CatalogCard = () => {
//   const { data } = useGetCategoriesQuery();
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language;

//   return data ? (
//     <>
//       <div className="catalogCard">
//         <div className="catalogCard__box" data-aos="zoom-in-down">
//           {data?.slice(0, 6)?.map((item) => (
//             <NavLink
//               key={item.id}
//               to={`/${(currentLang === "rus" ? item?.translations?.ru?.name : item?.translations?.en?.name)?.toLowerCase().replace(/\s+/g, '-')}/${item?.id}`}>
//               <div
//                 style={{
//                   backgroundImage: `url(${item?.images})`,
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "top right",
//                   backgroundSize: "350px auto",
//                 }}
//                 className="catalogCard__box-item">
//                 <div className="catalogCard__box-item-card">
//                   <div className="catalogCard__box-item-card-link">
//                     <span className="catalogCard__box-item-card-link-btn">
//                       <FaArrowRight />
//                     </span>
//                   </div>

//                   <div className="catalogCard__box-info">
//                     <h3 className="catalogCard__box-info-title">
//                       {currentLang === "rus"
//                         ? item?.translations?.ru?.name
//                         : item?.translations?.en?.name}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </>
//   ) : (
//     <>
//       {/* <div className="catalogCard">
//         <div className="catalogCard__box" data-aos="zoom-in-down">
//           {Catalog?.map((item) => (
//             <NavLink key={item.id} to={`/rychagi-podveski/${item?.id}`}>
//               <div
//                 style={{
//                   backgroundImage: `url(${item?.imageUrl})`,
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "top right",
//                   backgroundSize: "350px auto",
//                 }}
//                 className="catalogCard__box-item"
//               >

//                 <div className="catalogCard__box-item-card">
//                   <div className="catalogCard__box-item-card-link">
//                     <span className="catalogCard__box-item-card-link-btn">
//                       <FaArrowRight />
//                     </span>
//                   </div>

//                   <div className="catalogCard__box-info">
//                     <h3 className="catalogCard__box-info-title">
//                       {item?.name}
//                     </h3>
//                   </div>
//                 </div>

//               </div>
//             </NavLink>
//           ))}
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default CatalogCard;

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";
import { useTranslation } from "react-i18next";

import "./catalogCard.scss";

const CatalogCard = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  if (isLoading) {
    return (
      <div className="catalog-bg">
        <div className="catalog__grid">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="catalog__skeleton" />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="catalog">
      <div className="catalog__grid">
        {data?.slice(0, 6)?.map((item) => {
          const name =
            currentLang === "rus"
              ? item?.translations?.ru?.name
              : item?.translations?.en?.name;

          return (
            <NavLink
              key={item.id}
              to={`/${name?.toLowerCase().replace(/\s+/g, "-")}/${item?.id}`}
              className="catalog__card"
            >
              <div className="catalog__imageBox">
                <img src={item?.images} alt={name} />
              </div>

              <div className="catalog__bottom">
                <h3>{name}</h3>

                <div className="catalog__arrow">
                  <FaArrowRight />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogCard;

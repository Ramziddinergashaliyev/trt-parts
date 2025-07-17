// import React, { useEffect } from "react";
// import { PARTNER } from "../../static";
// import "./partner.scss";

// const Partner = () => {
//   useEffect(() => {
//     window.scroll(0, 0);
//   });

//   return (
//     <div className="partner">
//       <div>
//         <div className="partner__info">
//           <p className="partner__info-text">НАШИ ПАРТНЕРЫ</p>
//           <h3 className="partner__info-title">Комапании-поставщики сырья</h3>
//         </div>
//         <div className="partner__cards">
//           {PARTNER?.map((el) => (
//             <div key={el?.id} className="partner__card">
//               <div className="partner__card__top">
//                 <div className="partner__card__top-left">
//                   <img src={el?.flag} alt="" />
//                   <p className="partner__card__top-left-title">{el?.name}</p>
//                 </div>
//                 <div className="partner__card__top-right">
//                   <img src={el?.icon} alt="" />
//                 </div>
//               </div>
//               <div className="partner__card-img">
//                 <img src={el?.img} alt="" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partner;

import React, { memo, useEffect } from "react";
import { PARTNER } from "../../static";
import "./partner.scss";

const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="partner" aria-labelledby="partnerTitle">
      <div className="partner__info">
        <p className="partner__info-text">НАШИ ПАРТНЕРЫ</p>
        <h2 className="partner__info-title" id="partnerTitle">
          Компании-поставщики сырья
        </h2>
      </div>

      <div className="partner__cards">
        {PARTNER?.map((el) => (
          <article key={el?.id} className="partner__card">
            <div className="partner__card__top">
              <div className="partner__card__top-left">
                <img
                  src={el?.flag}
                  alt={`${el?.name} flag`}
                  loading="lazy"
                  width="32"
                  height="20"
                />
                <p className="partner__card__top-left-title">{el?.name}</p>
              </div>
              <div className="partner__card__top-right">
                <img
                  src={el?.icon}
                  alt={`${el?.name} icon`}
                  loading="lazy"
                  width="40"
                  height="40"
                />
              </div>
            </div>

            <div className="partner__card-img">
              <img
                src={el?.img}
                alt={`${el?.name} kompaniyasi`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(Partner);

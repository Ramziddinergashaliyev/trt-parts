// import React, { useEffect } from "react";
// import "./newost.scss";
// import { NEWS } from "../../static";

// const Newost = () => {
//   useEffect(() => {
//     window.scroll(0, 0);
//   });
//   const newsData = NEWS?.map((el) => (
//     <div key={el?.id} className="newost__card">
//       <div className="newost__card__img">
//         <img src={el?.img} alt="" />
//       </div>
//       <div className="newost__card__info">
//         <h3 className="newost__card__info-title">{el?.title}</h3>
//         <p className="newost__card__info-text">{el?.desc}</p>
//         <p className="newost__card__info-date">{el?.date}</p>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="newost container">
//       <p className="newost__text">БЛОГ КОМПАНИИ</p>
//       <p className="newost__title">Новости TRT</p>
//       <div className="newost__cards">{newsData}</div>
//     </div>
//   );
// };

// export default Newost;


import React, { useEffect } from "react";
import "./newost.scss";
import { NEWS } from "../../static";

const Newost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="newost container" aria-labelledby="blogTitle">
      <p className="newost__text">БЛОГ КОМПАНИИ</p>
      <h2 className="newost__title" id="blogTitle">Новости TRT</h2>

      <div className="newost__cards">
        {NEWS?.map((el) => (
          <article key={el?.id} className="newost__card">
            <div className="newost__card__img">
              <img src={el?.img} alt={el?.title || "Новость изображение"} />
            </div>

            <div className="newost__card__info">
              <h3 className="newost__card__info-title">{el?.title}</h3>
              <p className="newost__card__info-text">{el?.desc}</p>
              <time className="newost__card__info-date" dateTime={el?.date}>
                {el?.date}
              </time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Newost;

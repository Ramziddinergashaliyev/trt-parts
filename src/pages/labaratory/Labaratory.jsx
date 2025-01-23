import React, { useEffect } from "react";
import "./labaratory.scss";
import { NEWS } from "../../static";

const Labaratory = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const labaratoryData = NEWS?.slice(0, 5)?.map((el) => (
    <div className="labaratory__card">
      <div className="labaratory__card-img">
        <img src={el?.img} alt="" />
      </div>
      <div className="labaratory__card-info">
        <h2 className="labaratory__card-info-title">{el?.title}</h2>
        <p className="labaratory__card-info-text">{el?.desc}</p>
        <p className="labaratory__card-info-date">{el?.date}</p>
      </div>
    </div>
  ));

  return (
    <div className="labaratory container">
      <p className="labaratory__text">TRT LAB</p>
      <h3 className="labaratory__title">Лаборатория</h3>
      <div className="labaratory__cards">{labaratoryData}</div>
    </div>
  );
};

export default Labaratory;

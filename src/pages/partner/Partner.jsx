import React, { useEffect } from "react";
import { PARTNER } from "../../static";
import "./partner.scss";

const Partner = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const PartnerData = PARTNER?.map((el) => (
    <div key={el?.id} className="partner__card">
      <div className="partner__card__top">
        <div className="partner__card__top-left">
          <img src={el?.flag} alt="" />
          <p className="partner__card__top-left-title">{el?.name}</p>
        </div>
        <div className="partner__card__top-right">
          <img src={el?.icon} alt="" />
        </div>
      </div>
      <div className="partner__card-img">
        <img src={el?.img} alt="" />
      </div>
    </div>
  ));

  return (
    <div className="partner">
      <div className="partner__bg"></div>
      <div className="container">
        <div className="partner__info">
          <p className="partner__info-text">НАШИ ПАРТНЕРЫ</p>
          <h3 className="partner__info-title">Комапании-поставщики сырья</h3>
        </div>
        <div className="partner__cards">{PartnerData}</div>
      </div>
    </div>
  );
};

export default Partner;

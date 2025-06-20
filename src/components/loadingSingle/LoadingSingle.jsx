import React from "react";
import "./loadingSingle.scss";

const LoadingSingle = () => {
  return (
    <div className="loadingSin">
      <div className="loadingSin__wrapper">
        <div className="loadingSin__item">
          <div className="loadingSin__img2">
            <img className="bg__animation" src="" alt="" />
            <img className="bg__animation" src="" alt="" />
            <img className="bg__animation" src="" alt="" />
          </div>
          <div className="loadingSin__img1 bg__animation"></div>
        </div>
        <div className="loadingSin__items">
          <div className="loadingSin__title bg__animation"></div>
          <div className="loadingSin__items-info">
            <div className="loadingSin__text bg__animation"></div>
            <div className="loadingSin__text bg__animation"></div>
            <div className="loadingSin__text bg__animation"></div>
            <div className="loadingSin__text bg__animation"></div>
            <div className="loadingSin__text bg__animation"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSingle;

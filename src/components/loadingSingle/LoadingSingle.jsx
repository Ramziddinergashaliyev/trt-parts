import React from "react";
import "./loadingSingle.scss";

const LoadingSingle = () => {
  return (
    <div className="loadingSin" role="status" aria-live="polite" aria-busy="true">
      <div className="loadingSin__wrapper">
        <div className="loadingSin__item">
          <div className="loadingSin__img2">
            <div className="bg__animation" aria-hidden="true"></div>
            <div className="bg__animation" aria-hidden="true"></div>
            <div className="bg__animation" aria-hidden="true"></div>
          </div>

          <div className="loadingSin__img1 bg__animation" aria-hidden="true"></div>
        </div>

        <div className="loadingSin__items">
          <div className="loadingSin__title bg__animation" aria-hidden="true"></div>

          <div className="loadingSin__items-info">
            <div className="loadingSin__text bg__animation" aria-hidden="true"></div>
            <div className="loadingSin__text bg__animation" aria-hidden="true"></div>
            <div className="loadingSin__text bg__animation" aria-hidden="true"></div>
            <div className="loadingSin__text bg__animation" aria-hidden="true"></div>
            <div className="loadingSin__text bg__animation" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSingle;

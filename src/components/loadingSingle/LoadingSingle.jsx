import React from "react";
import "./loadingSingle.scss";

const LoadingSingle = () => {
  return (
    <div
      className="loadingSin container"
      role="status"
      aria-live="polite"
      aria-busy="true">

      <div className="loadingSin__wrapper">

        <div className="loadingSin__item">
          <div className="loadingSin__img2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="loadingSin__img2__text bg__animation"
                aria-hidden="true"
              ></div>
            ))}
          </div>

          <div
            className="loadingSin__img1 bg__animation"
            aria-hidden="true">
          </div>
        </div>

        <div className="loadingSin__items">

          <div
            className="loadingSin__title bg__animation"
            aria-hidden="true">
          </div>

          <div className="loadingSin__items-info">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="loadingSin__text bg__animation"
                aria-hidden="true"
              ></div>
            ))}
          </div>
        </div>

      </div>

      <div className="loadingSin__bottom">

        <div className="loadingSin__bottom__items">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="loadingSin__bottom__text bg__animation"
              aria-hidden="true"
            ></div>
          ))}
        </div>

        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="loadingSin__bottom-table bg__animation"></div>
        ))}

      </div>

    </div>
  );
};

export default LoadingSingle;

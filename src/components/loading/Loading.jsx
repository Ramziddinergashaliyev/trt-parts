import React from "react";
import "./loading.scss";

const Loading = () => {

  return (
    <div className="loading">
      <div className="loading__wrapper">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="loading__item" key={index}>
            <div className="loading__img bg__animation"></div>
            <div className="loading__title bg__animation"></div>
            <div className="loading__title bg__animation"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;

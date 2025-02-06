import React from "react";
import "./loading.scss";

const Loading = () => {
  const lodingCard = (
    <div className="loading__item">
      <div className="loading__img bg__animation"></div>
      <div className="loading__title bg__animation"></div>
      <div className="loading__title bg__animation"></div>
    </div>
  );
  return (
    <div className="loading">
      <div className="loading__wrapper">
        {lodingCard}
        {lodingCard}
        {lodingCard}
        {lodingCard}
        {lodingCard}
        {lodingCard}
        {lodingCard}
        {lodingCard}
      </div>
    </div>
  );
};

export default Loading;

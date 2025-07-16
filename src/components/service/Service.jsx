import React from "react";
import "./service.scss";
import { SERVICE } from "../../static";

const Service = () => {
  return (
    <div className="service">
      <div className="service__cards">
        {SERVICE?.map((el) => (
          <div key={el?.id} className="service__card" data-aos="flip-up">
            <div className="service__card-top">
              <div className="service__card-top-img">
                <img className="service__card-top-imgs" src={el?.img} alt="Service-img" />
              </div>
              <p className="service__card-top__title">{el?.number}</p>
            </div>
            <div className="service__card-top-info">
              <h3 className="service__card-top-info-title">{el?.name}</h3>
              <h3 className="service__card-top-info-text">{el?.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

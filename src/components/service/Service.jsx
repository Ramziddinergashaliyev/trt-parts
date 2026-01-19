import React from "react";
import "./service.scss";
import { useTranslation } from "react-i18next";

import { SERVICEENG } from "../../static/index";
import { SERVICERU } from "../../static/index";

const Service = () => {
  const { i18n } = useTranslation();

  return (
    <div className="service">
      <div className="service__cards">
        {i18n.languages[0] == "rus" ? (
          <>
            {SERVICERU?.map((el) => (
              <div key={el.id} className="service__card" data-aos="flip-up">
                <div className="service__card-top">
                  <div className="service__card-top-img">
                    <img
                      className="service__card-top-imgs"
                      src={el.img}
                      alt="Service-img"
                    />
                  </div>

                  <p className="service__card-top__title">{el.number}</p>
                </div>

                <div className="service__card-top-info">
                  <h3 className="service__card-top-info-title">{el.name}</h3>
                  <h3 className="service__card-top-info-text">{el.desc}</h3>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {SERVICEENG?.map((el) => (
              <div key={el.id} className="service__card" data-aos="flip-up">

                <div className="service__card-top">

                  <div className="service__card-top-img">
                    <img
                      className="service__card-top-imgs"
                      src={el.img}
                      alt="Service-img"
                    />
                  </div>

                  <p className="service__card-top__title">{el.number}</p>

                </div>

                <div className="service__card-top-info">
                  <h3 className="service__card-top-info-title">{el.name}</h3>
                  <h3 className="service__card-top-info-text">{el.desc}</h3>
                </div>

              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Service;

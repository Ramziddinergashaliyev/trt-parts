import React, { memo, useEffect } from "react";
import { PARTNER } from "../../static";
import "./partner.scss";
import { useTranslation } from "react-i18next";

const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation()

  return (
    <section className="partner" aria-labelledby="partnerTitle">
      
      <div className="partner__info">
        <h2 className="partner__info-title" id="partnerTitle">
          {t("Компании-поставщики")}
        </h2>
      </div>

      <div className="partner__cards">
        {PARTNER?.map((el) => (
          <article key={el?.id} className="partner__card">
  
            <div className="partner__card__top">
              <div className="partner__card__top-left">
                <img
                  src={el?.flag}
                  alt={`${el?.name} flag`}
                  loading="lazy"
                  width="32"
                  height="20"
                />
                <p className="partner__card__top-left-title">{el?.name}</p>
              </div>
              <div className="partner__card__top-right">
                <img
                  src={el?.icon}
                  alt={`${el?.name} icon`}
                  loading="lazy"
                  width="40"
                  height="40"
                />
              </div>
            </div>

            <div className="partner__card-img">
              <img
                src={el?.img}
                alt={`${el?.name} kompaniyasi`}
                loading="lazy"
              />
            </div>

          </article>
        ))}
      </div>

    </section>
  );
};

export default memo(Partner);

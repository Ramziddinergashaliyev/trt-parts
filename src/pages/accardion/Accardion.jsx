import React, { useEffect, useState } from "react";
import "./accardion.scss";

const Accardion = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const countries = [
    "Азербайджан",
    "Казахстан",
    "Киргизстан",
    "Таджикистан",
    "ФАЗ",
  ];

  return (
    <div className="accardion">
      <div className="accardion__list">
        <h3 className="accardion__title">Дистрибьюторы</h3>
        <ul className="accardion__list-info container">
          <p className="accardion__list-info-text">Список стран</p>
          {countries.map((country, index) => (
            <li key={index} className="accardion__item">
              <div
                className="accardion__header"
                onClick={() => toggleAccordion(index)}
              >
                <span>{country}</span>
                <span className="accardion__icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="accardion__content">
                  <p>Контактная информация для {country}.</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accardion;

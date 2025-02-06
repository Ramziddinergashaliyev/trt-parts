import React, { useState } from "react";
import img from "../../assets/icons/settings.svg";
import "./filter.scss";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/filterResults", {
      state: {
        oem: one,
        trt: two,
        brand: three,
        model: four,
      },
    });
  };

  return (
    <div className="filter">
      <div className="container">
        <div className="filter__top">
          <div className="filter__top__left">
            <p className="filter__top__left-text">ФИЛЬТР</p>
            <p className="filter__top__left-title">Поиск продукции</p>
          </div>
          <div className="filter__top__icon">
            <img src={img} alt="" />
          </div>
        </div>
        <form className="filter__form" onSubmit={handleSearch}>
          <div className="filter__form-left">
            <label htmlFor="">
              OEM номер
              <input
                onChange={(e) => setOne(e.target.value)}
                type="search"
                value={one}
                placeholder="2875013"
              />
            </label>
            <label htmlFor="">
              TRT-код
              <input
                onChange={(e) => setTwo(e.target.value)}
                type="search"
                value={two}
                placeholder="NR1001"
              />
            </label>
          </div>
          <div className="filter__form-right">
            <label htmlFor="">
              Марка
              <input
                onChange={(e) => setThree(e.target.value)}
                type="search"
                value={three}
                placeholder="DAEWOO"
              />
            </label>
            <label htmlFor="">
              Модель
              <input
                onChange={(e) => setFour(e.target.value)}
                type="search"
                value={four}
                placeholder="Nexia"
              />
            </label>
            <button type="submit" className="filter__form-btn">
              Найти деталь
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;

import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import img from "../../assets/icons/settings.svg";
import "./filter.scss";
import { useGetProductsQuery } from "../../context/api/productApi";

const Filter = () => {
  const { data } = useGetProductsQuery();
  const navigate = useNavigate();

  const trtOptions = data?.map((product) => ({
    value: product.trtCode,
    label: product.trtCode,
  }));

  const oemOptions = data?.map((product) => ({
    value: product.oem[0],
    label: product.oem[0],
  }));

  const markaOptions = data?.map((product) => ({
    value: product.marka[0],
    label: product.marka[0],
  }));

  const modelOptions = data?.map((product) => ({
    value: product.model[0],
    label: product.model[0],
  }));

  const [oem, setOem] = useState("");
  const [trt, setTrt] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (oem || trt || brand || model) {
      navigate("/filterResults", {
        state: { oem, trt, brand, model },
      });
    } else {
      alert("Iltimos, kamida bitta maydonni to‘ldiring!");
    }
  };

  return (
    <div className="filter">
      <div className="container">
        <div className="filter__top">
          <div className="filter__top__left">
            <p className="filter__top__left-title">Поиск продукции</p>
          </div>
          <div className="filter__top__icon">
            <img className="filter__top__icon-img" src={img} alt="settings" />
          </div>
        </div>

        <form className="filter__form" onSubmit={handleSearch}>
          <div className="filter__form-left">
            <label className="filter__form-left__label">
              OEM номер
              <Select
                options={oemOptions}
                onChange={(option) => setOem(option?.value || "")}
                placeholder="Поиск..."
                classNamePrefix="react-select"
              />
            </label>

            <label className="filter__form-left__label">
              TRT-код
              <Select
                options={trtOptions}
                onChange={(option) => setTrt(option?.value || "")}
                placeholder="Поиск..."
                classNamePrefix="react-select"
              />
            </label>
          </div>

          <div className="filter__form-right">
            <label className="filter__form-left__label">
              Марка
              <Select
                options={markaOptions}
                onChange={(option) => setBrand(option?.value || "")}
                placeholder="Поиск..."
                classNamePrefix="react-select"
              />
            </label>

            <div className="filter__form-right__btn">
              <label className="filter__form-left__label">
                Модель
                <Select
                  options={modelOptions}
                  onChange={(option) => setModel(option?.value || "")}
                  placeholder="Поиск..."
                  classNamePrefix="react-select"
                />
              </label>
              <button type="submit" className="filter__form-btn">
                Найти деталь
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;

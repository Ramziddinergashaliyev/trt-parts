import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import img from "../../assets/icons/settings.svg";
import "./filter.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const uniqueOptions = (arr) => {
  const seen = new Set();

  return arr?.filter((opt) => {
    if (!opt.value || seen.has(opt.value)) return false;
    seen.add(opt.value);
    return true;
  });
};

const Filter = () => {
  const { data } = useGetProductsQuery();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const trtOptions = uniqueOptions(
    data?.map((product) => ({
      value: product.trtCode,
      label: product.trtCode,
    }))
  );

  const oemOptions = uniqueOptions(
    data?.flatMap((product) =>
      Array.isArray(product.oem)
        ? product.oem.map((o) => ({ value: o, label: o }))
        : []
    )
  );

  const markaOptions = uniqueOptions(
    data?.flatMap((product) =>
      Array.isArray(product.carName)
        ? product.carName.map((name) => ({ value: name, label: name }))
        : []
    )
  );

  const modelOptions = uniqueOptions(
    data?.flatMap((product) =>
      Array.isArray(product.model)
        ? product.model.map((m) => ({ value: m, label: m }))
        : []
    )
  );

  const [oem, setOem] = useState(null);
  const [trt, setTrt] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (oem || trt || brand || model) {
      navigate("/filterResults", {
        state: {
          oem: oem?.value || "",
          trt: trt?.value || "",
          brand: brand?.value || "",
          model: model?.value || "",
        },
      });
    } else {
      toast.info(t("alert_fill_one"));
    }
  };

  return (
    <div className="filter">
      <div className="container">

        <div className="filter__top">
          <div className="filter__top__left">
            <p className="filter__top__left-title">{t("search_products")}</p>
          </div>

          <div className="filter__top__icon">
            <img className="filter__top__icon-img" src={img} alt="settings" />
          </div>
        </div>

        <form className="filter__form" onSubmit={handleSearch}>

          <div className="filter__form-left">

            <label className="filter__form-left__label">
              {t("oem_number")}
              <Select
                options={oemOptions}
                value={oem}
                onChange={(option) => setOem(option)}
                isClearable
                placeholder={t("search")}
                classNamePrefix="react-select"
              />
            </label>

            <label className="filter__form-left__label">
              {t("trt_code")}
              <Select
                options={trtOptions}
                value={trt}
                onChange={(option) => setTrt(option)}
                isClearable
                placeholder={t("search")}
                classNamePrefix="react-select"
              />
            </label>

          </div>

          <div className="filter__form-right">

            <label className="filter__form-left__label">
              {t("brand")}
              <Select
                options={markaOptions}
                value={brand}
                onChange={(option) => setBrand(option)}
                isClearable
                placeholder={t("search")}
                classNamePrefix="react-select"
              />
            </label>

            <div className="filter__form-right__btn">

              <label className="filter__form-left__label">
                {t("model")}
                <Select
                  options={modelOptions}
                  value={model}
                  onChange={(option) => setModel(option)}
                  isClearable
                  placeholder={t("search")}
                  classNamePrefix="react-select"
                />
              </label>

              <button type="submit" className="filter__form-btn">
                {t("find_part")}
              </button>

            </div>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Filter;
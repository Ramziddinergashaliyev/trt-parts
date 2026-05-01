// import React, { useState } from "react";

// import Select from "react-select";
// import { useNavigate } from "react-router-dom";
// import img from "../../assets/icons/settings.svg";
// import "./filter.scss";
// import { useGetProductsQuery } from "../../context/api/productApi";
// import { useTranslation } from "react-i18next";
// import { toast } from "react-toastify";

// const uniqueOptions = (arr) => {
//   const seen = new Set();

//   return arr?.filter((opt) => {
//     if (!opt.value || seen.has(opt.value)) return false;
//     seen.add(opt.value);
//     return true;
//   });
// };

// const Filter = () => {
//   const { data } = useGetProductsQuery();
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   const trtOptions = uniqueOptions(
//     data?.map((product) => ({
//       value: product.trtCode,
//       label: product.trtCode,
//     }))
//   );

//   const oemOptions = uniqueOptions(
//     data?.flatMap((product) =>
//       Array.isArray(product.oem)
//         ? product.oem.map((o) => ({ value: o, label: o }))
//         : []
//     )
//   );

//   const markaOptions = uniqueOptions(
//     data?.flatMap((product) =>
//       Array.isArray(product.carName)
//         ? product.carName.map((name) => ({ value: name, label: name }))
//         : []
//     )
//   );

//   const modelOptions = uniqueOptions(
//     data?.flatMap((product) =>
//       Array.isArray(product.model)
//         ? product.model.map((m) => ({ value: m, label: m }))
//         : []
//     )
//   );

//   const [oem, setOem] = useState(null);
//   const [trt, setTrt] = useState(null);
//   const [brand, setBrand] = useState(null);
//   const [model, setModel] = useState(null);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (oem || trt || brand || model) {
//       navigate("/filterResults", {
//         state: {
//           oem: oem?.value || "",
//           trt: trt?.value || "",
//           brand: brand?.value || "",
//           model: model?.value || "",
//         },
//       });
//     } else {
//       toast.info(t("alert_fill_one"));
//     }
//   };

//   return (
//     <div className="filter">
//       <div className="container">

//         <div className="filter__top">
//           <div className="filter__top__left">
//             <p className="filter__top__left-title">{t("search_products")}</p>
//           </div>

//           <div className="filter__top__icon">
//             <img className="filter__top__icon-img" src={img} alt="settings" />
//           </div>
//         </div>

//         <form className="filter__form" onSubmit={handleSearch}>

//           <div className="filter__form-left">

//             <label className="filter__form-left__label">
//               {t("oem_number")}
//               <Select
//                 options={oemOptions}
//                 value={oem}
//                 onChange={(option) => setOem(option)}
//                 isClearable
//                 placeholder={t("search")}
//                 classNamePrefix="react-select"
//               />
//             </label>

//             <label className="filter__form-left__label">
//               {t("trt_code")}
//               <Select
//                 options={trtOptions}
//                 value={trt}
//                 onChange={(option) => setTrt(option)}
//                 isClearable
//                 placeholder={t("search")}
//                 classNamePrefix="react-select"
//               />
//             </label>
//           </div>

//           <div className="filter__form-right">

//             <label className="filter__form-left__label">
//               {t("brand")}
//               <Select
//                 options={markaOptions}
//                 value={brand}
//                 onChange={(option) => setBrand(option)}
//                 isClearable
//                 placeholder={t("search")}
//                 classNamePrefix="react-select"
//               />
//             </label>

//             <div className="filter__form-right__btn">

//               <label className="filter__form-left__label">
//                 {t("model")}
//                 <Select
//                   options={modelOptions}
//                   value={model}
//                   onChange={(option) => setModel(option)}
//                   isClearable
//                   placeholder={t("search")}
//                   classNamePrefix="react-select"
//                 />
//               </label>

//               <button type="submit" className="filter__form-btn">
//                 {t("find_part")}
//               </button>

//             </div>

//           </div>

//         </form>

//       </div>
//     </div>
//   );
// };

// export default Filter;


import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../context/api/productApi";
import { toast } from "react-toastify";
import "./filter.scss";

const uniqueOptions = (arr) => {
  const seen = new Set();
  return arr?.filter((opt) => {
    if (!opt.value || seen.has(opt.value)) return false;
    seen.add(opt.value);
    return true;
  });
};

const selectStyles = {
  control: (base, state) => ({
    ...base,
    height: "52px",
    minHeight: "52px",
    backgroundColor: "#fafafa",
    border: state.isFocused ? "1px solid #d00101" : "1px solid #e8e8e8",
    borderRadius: "10px",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(208,1,1,0.08)" : "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: state.isFocused ? "#d00101" : "#ccc",
      backgroundColor: "#f5f5f5",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0 14px",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#bbb",
    fontSize: "14px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 400,
  }),

  singleValue: (base) => ({
    ...base,
    color: "#222",
    fontSize: "14px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 500,
  }),

  input: (base) => ({
    ...base,
    color: "#222",
    fontSize: "14px",
    fontFamily: "'Outfit', sans-serif",
  }),

  indicatorSeparator: () => ({ display: "none" }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? "#d00101" : "#bbb",
    transition: "color 0.2s, transform 0.2s",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    padding: "0 12px",
    "&:hover": { color: "#d00101" },
  }),

  clearIndicator: (base) => ({
    ...base,
    color: "#ccc",
    padding: "0 8px",
    "&:hover": { color: "#d00101" },
  }),

  menu: (base) => ({
    ...base,
    borderRadius: "10px",
    border: "1px solid #eee",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    overflow: "hidden",
    zIndex: 99,
  }),

  menuList: (base) => ({
    ...base,
    padding: "6px",
  }),

  option: (base, state) => ({
    ...base,
    borderRadius: "7px",
    fontSize: "14px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: state.isSelected ? 500 : 400,
    color: state.isSelected ? "#d00101" : "#333",
    backgroundColor: state.isSelected
      ? "rgba(208,1,1,0.07)"
      : state.isFocused
        ? "#f5f5f5"
        : "transparent",
    cursor: "pointer",
    padding: "10px 12px",
    "&:active": { backgroundColor: "rgba(208,1,1,0.1)" },
  }),

};

const Filter = () => {
  const { data } = useGetProductsQuery();
  const navigate = useNavigate();

  const [oem, setOem] = useState(null);
  const [trt, setTrt] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);

  const trtOptions = uniqueOptions(
    data?.map((p) => ({ value: p.trtCode, label: p.trtCode }))
  );

  const oemOptions = uniqueOptions(
    data?.flatMap((p) =>
      Array.isArray(p.oem) ? p.oem.map((o) => ({ value: o, label: o })) : []
    )
  );

  const markaOptions = uniqueOptions(
    data?.flatMap((p) =>
      Array.isArray(p.carName)
        ? p.carName.map((n) => ({ value: n, label: n }))
        : []
    )
  );

  const modelOptions = uniqueOptions(
    data?.flatMap((p) =>
      Array.isArray(p.model) ? p.model.map((m) => ({ value: m, label: m })) : []
    )
  );

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
      toast.info("Заполните хотя бы одно поле");
    }
  };

  const hasValue = oem || trt || brand || model;

  return (
    <section className="filter">
      <div className="container">

        <div className="filter__header">
          <div className="filter__header-left">
            <span className="filter__header-eyebrow">Каталог запчастей</span>
            <h2 className="filter__header-title">
              Найти <span>деталь</span>
            </h2>
          </div>

          <div className="filter__header-accent" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="21" cy="21" r="13" stroke="#d00101" strokeWidth="2.5" />
              <line x1="30.5" y1="30.5" x2="43" y2="43" stroke="#d00101" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="16" y1="21" x2="26" y2="21" stroke="#d00101" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="16" x2="21" y2="26" stroke="#d00101" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <form className="filter__form" onSubmit={handleSearch}>
          <div className="filter__fields">

            <div className="filter__field">
              <label className="filter__label">OEM номер</label>
              <Select
                options={oemOptions}
                value={oem}
                onChange={setOem}
                isClearable
                placeholder="Поиск..."
                styles={selectStyles}
              />
            </div>

            <div className="filter__field">
              <label className="filter__label">TRT код</label>
              <Select
                options={trtOptions}
                value={trt}
                onChange={setTrt}
                isClearable
                placeholder="Поиск..."
                styles={selectStyles}
              />
            </div>

            <div className="filter__field">
              <label className="filter__label">Марка</label>
              <Select
                options={markaOptions}
                value={brand}
                onChange={setBrand}
                isClearable
                placeholder="Поиск..."
                styles={selectStyles}
              />
            </div>

            <div className="filter__field">
              <label className="filter__label">Модель</label>
              <Select
                options={modelOptions}
                value={model}
                onChange={setModel}
                isClearable
                placeholder="Поиск..."
                styles={selectStyles}
              />
            </div>

          </div>

          <div className="filter__footer">
            <p className="filter__hint">
              {hasValue
                ? `Выбрано фильтров: ${[oem, trt, brand, model].filter(Boolean).length}`
                : "Заполните хотя бы одно поле"}
            </p>

            <button
              type="submit"
              className={`filter__btn ${hasValue ? "filter__btn--active" : ""}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              Найти запчасть
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Filter;
// import React, { useState } from "react";

// import Select from "react-select";
// import { useNavigate } from "react-router-dom";
// import img from "../../assets/icons/settings.svg";
// import "./filter.scss";
// import { useGetProductsQuery } from "../../context/api/productApi";
// import { useTranslation } from "react-i18next";
// import { toast } from "react-toastify";

// const Filter = () => {
//   const { data } = useGetProductsQuery();
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   const trtOptions = data?.map((product) => ({
//     value: product.trtCode,
//     label: product.trtCode,
//   }));

//   const oemOptions = data
//     ?.map((product) => {
//       const value =
//         Array.isArray(product.oem) && product.oem.length > 0
//           ? product.oem[0]
//           : "";
//       return { value, label: value };
//     })
//     .filter((option) => option.value);

//   const markaOptions = data
//     ?.map((product) => {
//       const value =
//         Array.isArray(product.carName) && product.carName.length > 0
//           ? product.carName[0]
//           : "";
//       return { value, label: value };
//     })
//     .filter((option) => option.value);

//   const modelOptions = data
//     ?.map((product) => {
//       const value =
//         Array.isArray(product.model) && product.model.length > 0
//           ? product.model[0]
//           : "";
//       return { value, label: value };
//     })
//     .filter((option) => option.value);

//   const [oem, setOem] = useState("");
//   const [trt, setTrt] = useState("");
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (oem || trt || brand || model) {
//       navigate("/filterResults", {
//         state: { oem, trt, brand, model },
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
//                 onChange={(option) => setOem(option?.value || "")}
//                 placeholder={t("search")}
//                 classNamePrefix="react-select"
//               />
//             </label>

//             <label className="filter__form-left__label">
//               {t("trt_code")}
//               <Select
//                 options={trtOptions}
//                 onChange={(option) => setTrt(option?.value || "")}
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
//                 onChange={(option) => setBrand(option?.value || "")}
//                 placeholder={t("search")}
//                 classNamePrefix="react-select"
//               />
//             </label>

//             <div className="filter__form-right__btn">

//               <label className="filter__form-left__label">
//                 {t("model")}
//                 <Select
//                   options={modelOptions}
//                   onChange={(option) => setModel(option?.value || "")}
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
import img from "../../assets/icons/settings.svg";
import "./filter.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Filter = () => {
  const { data } = useGetProductsQuery();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const trtOptions = data?.map((product) => ({
    value: product.trtCode,
    label: product.trtCode,
  }));

  const oemOptions = data
    ?.map((product) => {
      const value =
        Array.isArray(product.oem) && product.oem.length > 0
          ? product.oem[0]
          : "";
      return { value, label: value };
    })
    .filter((option) => option.value);

  const markaOptions = data
    ?.map((product) => {
      const value =
        Array.isArray(product.carName) && product.carName.length > 0
          ? product.carName[0]
          : "";
      return { value, label: value };
    })
    .filter((option) => option.value);

  const modelOptions = data
    ?.map((product) => {
      const value =
        Array.isArray(product.model) && product.model.length > 0
          ? product.model[0]
          : "";
      return { value, label: value };
    })
    .filter((option) => option.value);

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
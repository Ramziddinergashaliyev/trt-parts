// import React, { useState } from "react";
// import img from "../../assets/icons/settings.svg";
// import "./filter.scss";
// import { useNavigate } from "react-router-dom";

// const Filter = () => {
//   const navigate = useNavigate();

//   const [one, setOne] = useState("");
//   const [two, setTwo] = useState("");
//   const [three, setThree] = useState("");
//   const [four, setFour] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate("/filterResults", {
//       state: {
//         oem: one,
//         trt: two,
//         brand: three,
//         model: four,
//       },
//     });
//   };

//   return (
//     <div className="filter">
//       <div className="container">
//         <div className="filter__top">
//           <div className="filter__top__left">
//             <p className="filter__top__left-text">ФИЛЬТР</p>
//             <p className="filter__top__left-title">Поиск продукции</p>
//           </div>
//           <div className="filter__top__icon">
//             <img className="filter__top__icon-img" src={img} alt="" />
//           </div>
//         </div>

//         <form className="filter__form" onSubmit={handleSearch}>
//           <div className="filter__form-left">
//             <label className="filter__form-left__label" htmlFor="">
//               OEM номер
//               <input
//                 onChange={(e) => setOne(e.target.value)}
//                 className="filter__form-left-input"
//                 type="search"
//                 value={one}
//                 placeholder="2875013"
//               />
//             </label>
//             <label className="filter__form-left__label" htmlFor="">
//               TRT-код
//               <input
//                 onChange={(e) => setTwo(e.target.value)}
//                 className="filter__form-left-input"
//                 type="search"
//                 value={two}
//                 placeholder="NR1001"
//               />
//             </label>
//           </div>

//           <div className="filter__form-right">
//             <label className="filter__form-left__label" htmlFor="">
//               Марка
//               <input
//                 onChange={(e) => setThree(e.target.value)}
//                 className="filter__form-left-input"
//                 type="search"
//                 value={three}
//                 placeholder="DAEWOO"
//               />
//             </label>
//             <div className="filter__form-right__btn">
//               <label className="filter__form-left__label" htmlFor="">
//                 Модель
//                 <input
//                   onChange={(e) => setFour(e.target.value)}
//                   className="filter__form-left-input"
//                   type="search"
//                   value={four}
//                   placeholder="Nexia"
//                 />
//               </label>
//               <button type="submit" className="filter__form-btn">
//                 Найти деталь
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Filter;

import React, { useState, useEffect } from "react";
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

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   navigate("/filterResults", {
  //     state: { oem, trt, brand, model },
  //   });
  // };

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
            <img
              className="filter__top__icon-img"
              src={img}
              alt="Иконка настроек"
            />
          </div>
        </div>

        <form className="filter__form" onSubmit={handleSearch}>
          <div className="filter__form-left">
            <label className="filter__form-left__label" htmlFor="oem">
              OEM номер
              <Select
                id="trt"
                options={oemOptions}
                onChange={(selectedOption) =>
                  setOem(selectedOption?.value || "")
                }
                placeholder="Поиск..."
                classNamePrefix="react-select"
              />
            </label>

            <label className="filter__form-left__label" htmlFor="trt">
              TRT-код
              <Select
                id="trt"
                options={trtOptions}
                onChange={(selectedOption) =>
                  setTrt(selectedOption?.value || "")
                }
                placeholder="Поиск..."
                classNamePrefix="react-select"
              />
            </label>
          </div>

          <div className="filter__form-right">
            <label className="filter__form-left__label" htmlFor="brand">
              Марка
              <Select
                id="brand"
                options={markaOptions}
                onChange={(selectedOption) =>
                  setBrand(selectedOption?.value || "")
                }
                placeholder="Поиск..."
                classNamePrefix="react-select"
              />
            </label>

            <div className="filter__form-right__btn">
              <label className="filter__form-left__label" htmlFor="model">
                Модель
                <Select
                  id="model"
                  options={modelOptions}
                  onChange={(selectedOption) =>
                    setModel(selectedOption?.value || "")
                  }
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

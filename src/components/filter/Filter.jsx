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
            <img className="filter__top__icon-img" src={img} alt="Иконка настроек" />
          </div>
        </div>

        <form className="filter__form" onSubmit={handleSearch}>
          <div className="filter__form-left">
            <label className="filter__form-left__label" htmlFor="oem">
              OEM номер
              <input
                id="oem"
                onChange={(e) => setOne(e.target.value)}
                className="filter__form-left-input"
                type="search"
                value={one}
                placeholder="2875013"
              />
            </label>
            <label className="filter__form-left__label" htmlFor="trt">
              TRT-код
              <input
                id="trt"
                onChange={(e) => setTwo(e.target.value)}
                className="filter__form-left-input"
                type="search"
                value={two}
                placeholder="NR1001"
              />
            </label>
          </div>

          <div className="filter__form-right">
            <label className="filter__form-left__label" htmlFor="brand">
              Марка
              <input
                id="brand"
                onChange={(e) => setThree(e.target.value)}
                className="filter__form-left-input"
                type="search"
                value={three}
                placeholder="DAEWOO"
              />
            </label>
            <div className="filter__form-right__btn">
              <label className="filter__form-left__label" htmlFor="model">
                Модель
                <input
                  id="model"
                  onChange={(e) => setFour(e.target.value)}
                  className="filter__form-left-input"
                  type="search"
                  value={four}
                  placeholder="Nexia"
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

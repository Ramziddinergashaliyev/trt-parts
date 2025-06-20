// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./hero.scss";

// import icon from "../../assets/img/hero.png";
// import { FaAngleRight } from "react-icons/fa6";
// import img from "../../assets/img/RedCar.jpg";
// import img1 from "../../assets/img/hero1.jpg";
// import img2 from "../../assets/img/2.png";
// import { NavLink } from "react-router-dom";

// const Hero = () => {
//   const slides = [
//     {
//       image: img,
//       title: "Глобальные стандарты качества",
//       label: "1/3",
//       subtitle:
//         "Полный цикл производства современных высококачественных автозапчастей для легковых и грузовых автомобилей",
//     },
//     {
//       image: img1,
//       title: "Глобальные стандарты качества",
//       label: "2/3",
//       subtitle:
//         "Полный цикл производства современных высококачественных автозапчастей для легковых и грузовых автомобилей",
//     },
//     {
//       image: img2,
//       title: "Глобальные стандарты качества",
//       label: "3/3",
//       subtitle:
//         "Полный цикл производства современных высококачественных автозапчастей для легковых и грузовых автомобилей",
//     }
//   ];

//   const AnimatedStats = ({ endValue, text }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCount((prev) => {
//           if (prev >= endValue) {
//             clearInterval(interval);
//             return endValue;
//           }
//           return prev + 1;
//         });
//       }, 1);
//       return () => clearInterval(interval);
//     }, [endValue]);

//     return (
//       <h3 className="swiper__bottom__info-stats-title">
//         {count}
//         {text}
//       </h3>
//     );
//   };

//   return (
//     <>
//       <div className="swiper">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           style={{ transition: "ease-in-out 0.5s" }}
//           autoplay={{ delay: 3000 }}
//           speed={1500}
//           loop
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="swiper__slide "
//                 style={{
//                   background: `url(${slide.image})`,
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "top",
//                   backgroundSize: "cover",
//                 }}>
//                 <div className="swiper__overlay container">
//                   <div className="swiper__overlay__left">
//                     <p className="swiper__overlay__left-text">АВТОЗАПЧАСТИ</p>
//                     <h2 className="swiper__overlay__left-title">
//                       {slide.title}
//                     </h2>
//                   </div>

//                   <div className="swiper__overlay__right">
//                     <NavLink to={"/contact"} className="swiper__overlay__right-btns">
//                       <button className="swiper__overlay__right-btns-white">
//                         Связаться с нами
//                       </button>
//                       <button className="swiper__overlay__right-btns-red">
//                         <FaAngleRight />
//                       </button>
//                     </NavLink>
//                     <div className="swiper__overlay__right">
//                       <img src={icon} alt="" />
//                     </div>
//                     <p className="swiper__overlay__right-title">
//                       {slide.label}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="swiper__bottom">
//           <div className="swiper__bottom__left">
//             <p className="swiper__bottom__left-text">
//               Полный цикл производства современных высококачественных
//               автозапчастей для легковых и грузовых автомобилей
//             </p>
//           </div>
//           <div className="swiper__bottom__info">
//             <div className="swiper__bottom__info-stats">
//               <AnimatedStats endValue={1600} text="+" />
//               <p className="swiper__bottom__info-stats-text">Деталей в день</p>
//             </div>
//             <div className="swiper__bottom__info-stats">
//               <AnimatedStats endValue={65} text="%" />
//               <p className="swiper__bottom__info-stats-text">Доля экспорта</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="swipper__line"></div>
//     </>
//   );
// };

// export default Hero;


//Video

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.scss";
import icon from "../../assets/img/hero.png";
import { FaAngleRight } from "react-icons/fa6";
import video1 from "../../assets/video/video.mp4"; 
import { NavLink } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      video: video1, 
      title: "Глобальные стандарты качества",
      label: "1/1",
      subtitle:
        "Полный цикл производства современных высококачественных автозапчастей для легковых и грузовых автомобилей",
    }
  ];

  const AnimatedStats = ({ endValue, text }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= endValue) {
            clearInterval(interval);
            return endValue;
          }
          return prev + 1;
        });
      }, 1);
      return () => clearInterval(interval);
    }, [endValue]);

    return (
      <h3 className="swiper__bottom__info-stats-title">
        {count}
        {text}
      </h3>
    );
  };

  return (
    <>
      <div className="swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          style={{ transition: "ease-in-out 0.5s" }}
          autoplay={{ delay: 3000 }}
          speed={1500}
          loop >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper__slide">
                <video
                  className="swiper__slide__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={slide.video} type="video/mp4" />
                  Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
                </video>
                
                <div className="swiper__overlay container">
                  <div className="swiper__overlay__left">
                    <p className="swiper__overlay__left-text">АВТОЗАПЧАСТИ</p>
                    <h2 className="swiper__overlay__left-title">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="swiper__overlay__right">
                    <NavLink
                      to={"/contact"}
                      className="swiper__overlay__right-btns">
                      <button className="swiper__overlay__right-btns-white">
                        Связаться с нами
                      </button>
                      <button className="swiper__overlay__right-btns-red">
                        <FaAngleRight />
                      </button>
                    </NavLink>
                    <div className="swiper__overlay__right">
                      <img src={icon} alt="" />
                    </div>
                    <p className="swiper__overlay__right-title">
                      {slide.label}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper__bottom">
          <div className="swiper__bottom__left">
            <p className="swiper__bottom__left-text">
              Полный цикл производства современных высококачественных
              автозапчастей для легковых и грузовых автомобилей
            </p>
          </div>
          <div className="swiper__bottom__info">
            <div className="swiper__bottom__info-stats">
              <AnimatedStats endValue={1600} text="+" />
              <p className="swiper__bottom__info-stats-text">Деталей в день</p>
            </div>
            <div className="swiper__bottom__info-stats">
              <AnimatedStats endValue={65} text="%" />
              <p className="swiper__bottom__info-stats-text">Доля экспорта</p>
            </div>
          </div>
        </div>
      </div>
      <div className="swipper__line"></div>
    </>
  );
};

export default Hero;
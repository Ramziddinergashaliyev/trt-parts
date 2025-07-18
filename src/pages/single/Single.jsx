// import React, { useEffect, useState } from "react";
// import "./single.scss";
// import { useParams } from "react-router-dom";
// import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
// import Tabs from "../../components/Tab/Tab";
// import Application from "../../components/Application/Application";
// import Information from "../../components/Information/Information";
// import Characteristics from "../../components/Characteristics/Characteristics";
// import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
// import { useGetProductByIdQuery } from "../../context/api/productApi";

// const Single = () => {
//   const { id } = useParams();
//   const { data, isLoading } = useGetProductByIdQuery(id);

//   const [activeTab, setActiveTab] = useState("reviews");
//   const [selectedImage, setSelectedImage] = useState("");

//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);

//   useEffect(() => {
//     if (data?.images?.length > 0) {
//       setSelectedImage(data.images[0]);
//     }
//   }, [data]);

//   return (
//     <div className="detail">
//       <div className="container">
//         {isLoading ? (
//           <LoadingSingle />
//         ) : (
//           <div className="detail__cards">
//             <div className="detail__card__img">
//               <div className="detail__card__imgs">
//                 {data?.images?.map((img, index) => (
//                   <div
//                     key={index}
//                     className={`thumbnail ${
//                       selectedImage === img ? "active" : ""
//                     }`}
//                     onClick={() => setSelectedImage(img)}
//                   >
//                     <img src={img} alt={`thumb-${index}`} />
//                   </div>
//                 ))}
//               </div>
//               <div className="detail__img">
//                 <img src={selectedImage} alt="detail-img" />
//               </div>
//             </div>

//             <div className="detail__card__info">
//               <h3 className="detail__title">{data?.name}</h3>
//               <ul className="detail__card__info-list">
//                 <li className="detail__card__info-item">
//                   TRT-код: <span>{data?.trtCode}</span>
//                 </li>
//                 <li className="detail__card__info-item">
//                   Марка: <span>{data?.carName}</span>
//                 </li>
//                 <li className="detail__card__info-item">
//                   Модель: <span>{data?.model}</span>
//                 </li>
//                 <li className="detail__card__info-item">
//                   ОЕМ номер: <span>{data?.oem[0]}</span>
//                 </li>
//                 <li className="detail__card__info-item">
//                   Год: <span>{data?.years}</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>

//       <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
//       <div className="tab-content">
//         <div className="tab-content-text container">
//           {activeTab === "reviews" && <Characteristics data={data} />}
//           {activeTab === "Application" && <Application data={data} />}
//           {activeTab === "Information" && <Information data={data} />}
//         </div>
//       </div>

//       <div className="container">
//         <HandleSwiper />
//       </div>
//     </div>
//   );
// };

// export default Single;



import React, { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";

import "./single.scss";
import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
import Tabs from "../../components/Tab/Tab";
import Application from "../../components/Application/Application";
import Information from "../../components/Information/Information";
import Characteristics from "../../components/Characteristics/Characteristics";
import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
import { useGetProductByIdQuery } from "../../context/api/productApi";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  console.log(data);
  

  const [activeTab, setActiveTab] = useState("reviews");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data?.images?.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  if (isLoading) return <LoadingSingle />;
  if (error || !data) return <p className="error">Xatolik yuz berdi. Qayta urinib ko‘ring.</p>;

  return (
    <div className="detail">
      <div className="container">
        <div className="detail__cards">
          <div className="detail__card__img">
            <div className="detail__card__imgs">
              {data.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`thumb-${index}`} />
                </div>
              ))}
            </div>
            <div className="detail__img">
              <img src={selectedImage} alt="Mahsulot rasmi" />
            </div>
          </div>

          <div className="detail__card__info">
            <h3 className="detail__title">{data.name}</h3>
            <ul className="detail__card__info-list">
              {data?.trtCode && (
                <li className="detail__card__info-item">
                  TRT-код: <span>{data.trtCode}</span>
                </li>
              )}
              {data?.marka && (
                <li className="detail__card__info-item">
                  Марка: <span>{data.marka}</span>
                </li>
              )}
              {data?.model && (
                <li className="detail__card__info-item">
                  Модель: <span>{data.model}</span>
                </li>
              )}
              {data?.oem?.length > 0 && (
                <li className="detail__card__info-item">
                  ОЕМ номер: <span>{data.oem.join(", ")}</span>
                </li>
              )}
              {data?.year && (
                <li className="detail__card__info-item">
                  Год: <span>{data.year}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <Tabs activeTab={activeTab} onTabClick={setActiveTab} />

      <div className="tab-content">
        <div className="tab-content-text container">
          {activeTab === "reviews" && <Characteristics data={data} />}
          {activeTab === "Application" && <Application data={data} />}
          {activeTab === "Information" && <Information data={data} />}
        </div>
      </div>

      <div className="container">
        <HandleSwiper />
      </div>
    </div>
  );
};

export default memo(Single);

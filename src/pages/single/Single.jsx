import React, { useEffect, useState } from "react";
import "./single.scss";
import { NavLink, useParams } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import Characteristics from "../../components/Characteristics/Characteristics";
import LoadingSingle from "../../components/loadingSingle/LoadingSingle";
import Tabs from "../../components/Tab/Tab";
import Application from "../../components/Application/Application";
import Information from "../../components/Information/Information";
import HandleSwiper from "../../components/handleSwiper/HandleSwiper";
import { useGetProductByIdQuery } from "../../context/api/productApi";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);

  useEffect(() => {
    window.scroll(0, 0);
  });

  const [activeTab, setActiveTab] = useState("reviews");
  return (
    <div className="detail">
      <div className="container">
        {isLoading ? (
          <LoadingSingle />
        ) : (
          <div className="detail__cards">
            <div className="detail__card__img">
              <div className="detail__card__imgs">
                <div>
                  <img src={data?.imageUrl} alt="" />
                </div>
                {/* {data?.imageUrl?.map((el, inx) => (
                  <div key={inx}>
                    <img src={el} alt="" onClick={() => setIndex(inx)} />
                  </div>
                ))} */}
              </div>
              <div className="detail__img">
                <img src={data?.imageUrl} alt="detail-img" />
              </div>
            </div>
            <div className="detail__card__info">
              <h3 className="detail__title">{data?.name}</h3>
              <ul className="detail__card__info-list">
                <li className="detail__card__info-item">
                  TRT-код: <span>{data?.trtCode}</span>
                </li>
                <li className="detail__card__info-item">
                  Марка: <span>{data?.carName}</span>
                </li>
                <li className="detail__card__info-item">
                  Модель: <span>{data?.brand}</span>
                </li>
                <li className="detail__card__info-item">
                  ОЕМ номер: <span>{data?.oem}</span>
                </li>
                <li className="detail__card__info-item">
                  Год: <span>{data?.years}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
      <div className="tab-content">
        <div className="tab-content-text container">
          {activeTab === "reviews" && <Characteristics />}
          {activeTab === "Application" && <Application />}
          {activeTab === "Information" && <Information />}
        </div>
      </div>
      {/* <h3 className="detail__like__title">You might also like</h3> */}
      <div className="top__products">
        {/* <Products data={dataProducts?.payload} /> */}
      </div>
      <div className="container">
        <HandleSwiper />
      </div>
    </div>
  );
};

export default Single;

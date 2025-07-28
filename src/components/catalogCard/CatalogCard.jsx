import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";

import "./catalogCard.scss";
import { Catalog } from "../../static";

const CatalogCard = () => {
  const { data } = useGetCategoriesQuery();

  return data ? (
    <>
      <div className="catalogCard">
        <div className="catalogCard__box" data-aos="zoom-in-down">
          {data?.slice(0, 6)?.map((item) => (
            <NavLink key={item.id} to={`/rychagi-podveski/${item?.id}`}>
              <div
                style={{
                  backgroundImage: `url(${item?.imageUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top right",
                  backgroundSize: "350px auto",
                }}
                className="catalogCard__box-item"
              >
                <div className="catalogCard__box-item-card">
                  <div className="catalogCard__box-item-card-link">
                    <span className="catalogCard__box-item-card-link-btn">
                      <FaArrowRight />
                    </span>
                  </div>
                  <div className="catalogCard__box-info">
                    <h3 className="catalogCard__box-info-title">
                      {item?.name}
                    </h3>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="catalogCard">
        <div className="catalogCard__box" data-aos="zoom-in-down">
          {Catalog?.map((item) => (
            <NavLink key={item.id} to={`/rychagi-podveski/${item?.id}`}>
              <div
                style={{
                  backgroundImage: `url(${item?.imageUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top right",
                  backgroundSize: "350px auto",
                }}
                className="catalogCard__box-item"
              >
                <div className="catalogCard__box-item-card">
                  <div className="catalogCard__box-item-card-link">
                    <span className="catalogCard__box-item-card-link-btn">
                      <FaArrowRight />
                    </span>
                  </div>

                  <div className="catalogCard__box-info">
                    <h3 className="catalogCard__box-info-title">
                      {item?.name}
                    </h3>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogCard;

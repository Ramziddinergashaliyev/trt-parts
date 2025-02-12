import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";

import "./catalogCard.scss";

const CatalogCard = () => {
  const { data } = useGetCategoriesQuery();
  console.log(data);

  return (
    <div className="catalogCard">
      <div className="catalogCard__box" data-aos="zoom-in-down">
        {data?.slice(0, 6)?.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              backgroundSize: "350px auto",
            }}
            className="catalogCard__box-item"
          >
            <div className="catalogCard__box-item-card">
              <NavLink
                className="catalogCard__box-item-card-link"
                to={`/rychagi-podveski/${item?.id}`}
              >
                <button>
                  <FaArrowRight />
                </button>
              </NavLink>
              <div className="catalogCard__box-info">
                <h3 className="catalogCard__box-info-title">{item.name}</h3>
                {/* <p className="catalogCard__box-info-text">Раздел</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogCard;

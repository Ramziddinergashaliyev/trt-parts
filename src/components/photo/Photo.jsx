import React from "react";
import "./photo.scss";
import img from "../../assets/company/img1.webp";
import img1 from "../../assets/company/img2.webp";
import img2 from "../../assets/company/img3.webp";

const Photo = () => {
  return (
    <div className="photo">
      <div className="photo__cards">
        <img className="photo__cards-img" src={img} alt="photo__cards-img" />
        <img className="photo__cards-img" src={img1} alt="photo__cards-img" />
        <img className="photo__cards-img" src={img2} alt="photo__cards-img" />
      </div>
    </div>
  );
};

export default Photo;

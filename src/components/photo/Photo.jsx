import React from "react";
import "./photo.scss";
import img from "../../assets/company/img1.png";
import img1 from "../../assets/company/img2.png";
import img2 from "../../assets/company/img3.png";

const Photo = () => {
  return (
    <div className="photo">
      <div className="photo__cards">
        <img className="photo__cards-img" src={img} alt="" />
        <img className="photo__cards-img" src={img1} alt="" />
        <img className="photo__cards-img" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Photo;

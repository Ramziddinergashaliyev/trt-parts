import React from "react";
import "./photo.scss";
import img from "../../assets/company/img1.png";
import img1 from "../../assets/company/img2.png";
import img2 from "../../assets/company/img3.png";

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

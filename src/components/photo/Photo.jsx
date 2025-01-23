import React from "react";
import "./photo.scss";
import img from "../../assets/img/img1.png";
import img1 from "../../assets/img/img2.png";
import img2 from "../../assets/img/img3.png";

const Photo = () => {
  return (
    <div className="photo">
      <div className="photo__imgs">
        <img src={img} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Photo;

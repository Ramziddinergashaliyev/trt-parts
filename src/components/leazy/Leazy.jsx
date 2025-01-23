import React from "react";
import "./leazy.scss";
import img from "../../assets/video/leazy2.gif";

const Leazy = () => {
  return (
    <div className="leazy">
      <div className="leazy__card">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Leazy;

import React from "react";
import "./information.scss";

const Information = ({ data }) => {
  return (
    <div className="information">
      <div className="information__card">
        <p className="information__card-text">OEM</p>
        <p className="information__card-title">{data?.oem}</p>
      </div>
    </div>
  );
};

export default Information;

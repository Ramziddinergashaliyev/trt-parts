import React from "react";
import "./information.scss";

const Information = ({ data }) => {
  return (
    <div className="information">
      {data?.oem?.map((el) => (
        <div className="information__card">
          <p className="information__card-text">OEM</p>
          <p className="information__card-title">{el}</p>
        </div>
      ))}
    </div>
  );
};

export default Information;

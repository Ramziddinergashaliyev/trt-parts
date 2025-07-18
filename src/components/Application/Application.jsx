import React from "react";
import "./application.scss";

const Application = ({ data }) => {
  console.log(data);
  return (
    <div className="application">
      <div className="application__card">
        <p className="application__text">{data?.marka}</p>
        <h3 className="application__title">{data?.model}</h3>
        <p className="application__desc">{data?.year}</p>
      </div>
    </div>
  );
};

export default Application;

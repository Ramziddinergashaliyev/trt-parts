import React from "react";
import "./application.scss";

const Application = ({ data }) => {
  return (
    <div className="application">
      {data?.model?.map((modelName, index) => (
        <div className="application__card" key={index}>
          <p className="application__text">{data?.marka?.[0]}</p>
          <h3 className="application__title">{modelName}</h3>
          <p className="application__desc">{data?.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Application;

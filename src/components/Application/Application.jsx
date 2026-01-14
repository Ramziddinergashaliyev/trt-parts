import React from "react";
import "./application.scss";

const Application = ({ data }) => {
  const maxLength = Math.max(
    data?.carName?.length || 0,
    data?.model?.length || 0,
    data?.years?.length || 0
  );

  return (
    <div className="application">
      {Array.from({ length: maxLength }).map((_, index) => (
        <div className="application__card" key={index}>

          <p className="application__text">
            {data?.carName?.length === 1
              ? data.carName[0]
              : data?.carName?.[index] || ""}
          </p>

          <h3 className="application__title">
            {data?.model?.length === 1
              ? data.model[0]
              : data?.model?.[index] || ""}
          </h3>

          <p className="application__desc">
            {data?.years?.length === 1
              ? data.years[0]
              : data?.years?.[index] || ""}
          </p>

        </div>
      ))}
    </div>
  );
};

export default Application;


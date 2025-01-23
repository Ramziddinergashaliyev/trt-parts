import React from "react";
import "./service.scss";
import img1 from "../../assets/img/prinsp1.png";
import img2 from "../../assets/img/prinsp2.png";
import img3 from "../../assets/img/prinsp3.png";

const Service = () => {
  return (
    <div className="service">
      <div className="service__cards">
        <div className="service__card" data-aos="flip-up">
          <div className="service__card-top">
            <div className="service__card-top-img">
              <img src={img1} alt="" />
            </div>
            <p>01</p>
          </div>
          <div className="service__card-top-info">
            <h3 className="service__card-top-info-title">
              Надежность и качество
            </h3>
            <h3 className="service__card-top-info-text">
              Наше оборудование и процессы производства направлены на
              обеспечение долговечности и надежности наших продуктов
            </h3>
          </div>
        </div>
        <div className="service__card" data-aos="flip-up">
          <div className="service__card-top">
            <div className="service__card-top-img">
              <img src={img2} alt="" />
            </div>
            <p>02</p>
          </div>
          <div className="service__card-top-info">
            <h3 className="service__card-top-info-title">
              Надежность и качество
            </h3>
            <h3 className="service__card-top-info-text">
              Наше оборудование и процессы производства направлены на
              обеспечение долговечности и надежности наших продуктов
            </h3>
          </div>
        </div>
        <div className="service__card" data-aos="flip-up">
          <div className="service__card-top">
            <div className="service__card-top-img">
              <img src={img3} alt="" />
            </div>
            <p>03</p>
          </div>
          <div className="service__card-top-info">
            <h3 className="service__card-top-info-title">
              Надежность и качество
            </h3>
            <h3 className="service__card-top-info-text">
              Наше оборудование и процессы производства направлены на
              обеспечение долговечности и надежности наших продуктов
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

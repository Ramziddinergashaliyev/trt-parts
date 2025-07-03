import React from "react";
import img from "../../assets/img/bars.png";
import "./menu.scss";

function Menu({ setClose }) {
  return (
    <div className="products__top">
      <button onClick={() => setClose((p) => !p)}>
        <img src={img} alt="products-img" />
      </button>
    </div>
  );
}

export default Menu;

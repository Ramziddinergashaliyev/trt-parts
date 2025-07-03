import React from "react";
import "./tab.scss";

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs">
      <div className="container tabs__card">
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => onTabClick("reviews")}
        >
          Информация о номере ОЕМ
        </button>
        <button
          className={`tab ${activeTab === "Application" ? "active" : ""}`}
          onClick={() => onTabClick("Application")}
        >
          Применимость
        </button>
        <button
          className={`tab ${activeTab === "Information" ? "active" : ""}`}
          onClick={() => onTabClick("Information")}
        >
          Доп. информация
        </button>
      </div>
    </div>
  );
};

export default Tabs;

import React from "react";

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs container">
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
  );
};

export default Tabs;

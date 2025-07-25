import React from "react";
import "./tab.scss";
import { useTranslation } from "react-i18next";

const Tabs = ({ activeTab, onTabClick }) => {
  const { t } = useTranslation()
  return (
    <div className="tabs">
      <div className="container tabs__card">
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => onTabClick("reviews")}
        >
          {t("Информация")}
        </button>
        <button
          className={`tab ${activeTab === "Application" ? "active" : ""}`}
          onClick={() => onTabClick("Application")}
        >
          {t("Применимость")}
        </button>
        <button
          className={`tab ${activeTab === "Information" ? "active" : ""}`}
          onClick={() => onTabClick("Information")}
        >
          {t("Доп")}
        </button>
      </div>
    </div>
  );
};

export default Tabs;

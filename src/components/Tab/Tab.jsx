// import React from "react";
// import "./tab.scss";

// const Tabs = ({ activeTab, onTabClick }) => {
//   return (
//     <div className="tabs">
//       <div className="container tabs__card">
//         <button
//           className={`tab ${activeTab === "reviews" ? "active" : ""}`}
//           onClick={() => onTabClick("reviews")}
//         >
//           Информация о номере ОЕМ
//         </button>
//         <button
//           className={`tab ${activeTab === "Application" ? "active" : ""}`}
//           onClick={() => onTabClick("Application")}
//         >
//           Применимость
//         </button>
//         <button
//           className={`tab ${activeTab === "Information" ? "active" : ""}`}
//           onClick={() => onTabClick("Information")}
//         >
//           Доп. информация
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Tabs;


import React from "react";
import "./tab.scss";

const tabList = [
  { id: "reviews", label: "Информация о номере ОЕМ" },
  { id: "Application", label: "Применимость" },
  { id: "Information", label: "Доп. информация" },
];

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs">
      <div
        className="container tabs__card"
        role="tablist"
        aria-label="Product detail tabs"
      >
        {tabList.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

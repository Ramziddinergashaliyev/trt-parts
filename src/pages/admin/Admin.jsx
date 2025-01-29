import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./admin.scss";
import { Outlet } from "react-router-dom";
import Menu from "../../components/menu/Menu";

const Admin = () => {
  const [close, setClose] = useState(false);
  return (
    <div className={`admin ${close ? "admin__close" : ""}`}>
      <Sidebar />
      <div>
        <Menu setClose={setClose} />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

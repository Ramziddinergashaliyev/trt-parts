import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { logout } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import img from "../../assets/icons/headerIcon.svg";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <section className="sidebar">
      <NavLink className="sidebar__top">
        <img src={img} alt="" />
        <p className="sidebar__top-title">PARTS</p>
      </NavLink>

      <ul className="sidebar__item">
        <div>
          <li className="sidebar__list">
            <NavLink to={"createProduct"} className={"sidebar__left__text"}>
              <MdOutlineCreateNewFolder />
              create products
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"manageProduct"} className={"sidebar__left__text"}>
              <MdManageHistory />
              manage products
            </NavLink>
          </li>
        </div>

        <div className="sidebar__btns">
          <NavLink to={"/"} className="sidebar__btns__title">
            <IoHomeOutline />
            <p>Home</p>
          </NavLink>
          <div className="sidebar__btns__title" onClick={handleLogout}>
            <FiLogOut />
            <p>Login out</p>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default Sidebar;

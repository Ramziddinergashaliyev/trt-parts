// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "./sidebar.scss";
// import { MdOutlineCreateNewFolder } from "react-icons/md";
// import { logout } from "../../context/slices/authSlice";
// import { useDispatch } from "react-redux";
// import { IoHomeOutline } from "react-icons/io5";
// import { MdManageHistory } from "react-icons/md";
// import { FiLogOut } from "react-icons/fi";
// import img from "../../assets/icons/headerIcon.svg";

// function Sidebar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };
//   return (
//     <section className="sidebar">
//       <NavLink className="sidebar__top">
//         <img src={img} alt="" />
//         <p className="sidebar__top-title">PARTS</p>
//       </NavLink>
//       <ul className="sidebar__item">
//         <div>
//           <li className="sidebar__list">
//             <NavLink to={"createProduct"} className={"sidebar__left__text"}>
//               <MdOutlineCreateNewFolder />
//               create products
//             </NavLink>
//           </li>
//           <li className="sidebar__list">
//             <NavLink to={"manageProduct"} className={"sidebar__left__text"}>
//               <MdManageHistory />
//               manage products
//             </NavLink>
//           </li>
//         </div>
//         <div className="sidebar__btns">
//           <NavLink to={"/"} className="sidebar__btns__title">
//             <IoHomeOutline />
//             <p>Home</p>
//           </NavLink>
//           <div className="sidebar__btns__title" onClick={handleLogout}>
//             <FiLogOut />
//             <p>Login out</p>
//           </div>
//         </div>
//       </ul>
//     </section>
//   );
// }

// export default Sidebar;


import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MdOutlineCreateNewFolder, MdManageHistory } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

import { logout } from "../../context/slices/authSlice";
import img from "../../assets/icons/headerIcon.svg";

import "./sidebar.scss";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <aside className="sidebar" aria-label="Yon panel navigatsiyasi">
      <div className="sidebar__top">
        <NavLink to="/" aria-label="Bosh sahifaga qaytish">
          <img src={img} alt="Parts logotipi" />
          <p className="sidebar__top-title">PARTS</p>
        </NavLink>
      </div>

      <nav>
        <ul className="sidebar__item">
          <li className="sidebar__list">
            <NavLink to="createProduct" className="sidebar__left__text">
              <MdOutlineCreateNewFolder aria-hidden="true" />
              <span>Yangi mahsulot</span>
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="manageProduct" className="sidebar__left__text">
              <MdManageHistory aria-hidden="true" />
              <span>Mahsulotlarni boshqarish</span>
            </NavLink>
          </li>
          <li className="sidebar__list sidebar__btns">
            <NavLink to="/" className="sidebar__btns__title">
              <IoHomeOutline aria-hidden="true" />
              <span>Bosh sahifa</span>
            </NavLink>
          </li>
          <li className="sidebar__list sidebar__btns">
            <button
              onClick={handleLogout}
              className="sidebar__btns__title"
              aria-label="Chiqish"
            >
              <FiLogOut aria-hidden="true" />
              <span>Chiqish</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

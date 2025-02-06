import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

let initialState = {
  username: "ramziddin717",
  password: "rmz1234",
};

const Login = () => {
  const [value, setValue] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/manageProduct");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit} action="">
        <div>
          <h3 className="login__form__title">Royxatdan o'tish</h3>
          <p className="login__form__text">
            Davom etish uchun username va parolingizni kiriting
          </p>
        </div>
        <label htmlFor="">
          Foydalanuvchi shaxs
          <input
            value={value.username}
            name="username"
            placeholder="username"
            type="text"
          />
        </label>
        <label htmlFor="">
          <div className="login__form__info">
            <p>Parol</p>
            <span>Parolni unutdingizmi?</span>
          </div>
          <input
            value={value.password}
            name="password"
            placeholder="password"
            type="text"
          />
        </label>
        <div className="login__form__check">
          <input type="checkbox" />
          <span>Parolni eslab qolish</span>
        </div>
        <button>Tizimga kirish</button>
      </form>
    </div>
  );
};

export default Login;

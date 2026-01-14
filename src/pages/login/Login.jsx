import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const initialState = {
  username: "ramziddin717",
  password: "rmz1234",
};

const Login = () => {
  const [value, setValue] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.username || !value.password) {
      alert("Iltimos, foydalanuvchi nomi va parolni to‘ldiring.");
      return;
    }

    navigate("/admin/manageProduct");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        
        <div>
          <h3 className="login__form__title">Ro‘yxatdan o‘tish</h3>
          <p className="login__form__text">
            Davom etish uchun username va parolingizni kiriting
          </p>
        </div>

        <label>
          Foydalanuvchi nomi
          <input
            value={value.username}
            onChange={handleChange}
            name="username"
            placeholder="username"
            type="text"
            required
          />
        </label>

        <label>
          <div className="login__form__info">
            <p>Parol</p>
            <span>Parolni unutdingizmi?</span>
          </div>
          <input
            value={value.password}
            onChange={handleChange}
            name="password"
            placeholder="password"
            type="password"
            required
          />
        </label>

        <div className="login__form__check">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Parolni eslab qolish</label>
        </div>

        <button type="submit">Tizimga kirish</button>
      </form>
    </div>
  );
};

export default memo(Login);

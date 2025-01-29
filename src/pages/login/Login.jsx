import React, { useEffect, useState } from "react";
// import { useSignInMutation } from "../../context/api/userApi";
import { useDispatch } from "react-redux";
// import { setToken } from "../../context/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import "./login.scss";

let initialState = {
  username: "ramziddin717",
  password: "rmz1234",
};

const Login = () => {
  const [value, setValue] = useState(initialState);
  // const [signIn, { data, isSuccess, isError }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(isSuccess);

  // let handleChange = (e) => {
  //   let { value, name } = e.target;
  //   setValue((prev) => ({ ...prev, [name]: value }));
  // };

  // console.log(data);

  // const isSuccess = true

  // useEffect(() => {
  //   if (isSuccess) {
  //     // localStorage.setItem("x-auth-token", data?.accessToken);
  //     // dispatch(setToken(data?.accessToken));
  //     // toast.success("Ro'yhatdan o'tdingiz");
  //     navigate("/admin/home");
  //   }
  // }, [isSuccess]);

  // useEffect(() => {
  //   if (isError) {
  //     toast.error("Qaytadan urunib ko'ring");
  //   }
  // }, [isError]);

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
            // onChange={handleChange}
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
            // onChange={handleChange}
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

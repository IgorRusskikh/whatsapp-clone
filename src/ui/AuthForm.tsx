import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '@/features/user/userSlice';

const AuthForm = () => {
  const [authVariant, setAuthVariant] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleVariant = () => {
    setAuthVariant(authVariant === "login" ? "register" : "login");
  };

  const login = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: formData.phone,
        password: formData.password,
      }),
    });

    const user = await response.json();

    if (user.id) {
      dispatch(setUser(user));
    }
  };

  const regiter = async () => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        dispatch(setUser(data));
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-2/5 h-5/6 bg-[#202c33]">
        <div className="flex flex-col gap-10 items-center py-20 px-24">
          <div className="flex justify-center items-center mb-10">
            <Image
              src="/icons8-whatsapp-480.png"
              alt=""
              width={50}
              height={80}
              alt=""
            />
            <h1 className="text-4xl text-[#e9edef] ml-3">Whatsapp</h1>
          </div>
          <h1 className="text-3xl text-[#e9edef] mb-5">
            {authVariant === "login" ? "Вход" : "Регистрация"}
          </h1>
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-5 w-full text-lg">
              {authVariant !== "login" && (
                <input
                  className="bg-[#2a3942] w-full px-4 py-3 rounded-xl outline-none text-[#ddedef]"
                  type="text"
                  name="username"
                  id=""
                  placeholder="Введите имя пользователя"
                  value={formData.username}
                  onChange={(event) =>
                    setFormData({ ...formData, username: event.target.value })
                  }
                />
              )}
              <input
                className="bg-[#2a3942] w-full px-4 py-3 rounded-xl outline-none text-[#ddedef]"
                type="text"
                name="phone"
                id=""
                placeholder="Введите номер телефона"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
              />
              <input
                className="bg-[#2a3942] w-full px-4 py-3 rounded-xl outline-none text-[#ddedef]"
                type="password"
                name="password"
                id=""
                placeholder="Введите пароль"
                value={formData.password}
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
              />
              {authVariant !== "login" && (
                <input
                  className="bg-[#2a3942] w-full px-4 py-3 rounded-xl outline-none text-[#ddedef]"
                  type="password"
                  name="repeatPassword"
                  id=""
                  placeholder="Повторите пароль"
                  value={formData.repeatPassword}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      repeatPassword: event.target.value,
                    })
                  }
                />
              )}
            </div>
            <div className="flex justify-end mt-3 text-[#e9edef]">
              {authVariant === "login" ? (
                <span>
                  Нет аккаунта?{" "}
                  <span
                    className="text-[#3ec352] cursor-pointer"
                    onClick={toggleVariant}
                  >
                    Создать аккаунт
                  </span>
                </span>
              ) : (
                <span>
                  Уже есть аккаунт?{" "}
                  <span
                    className="text-[#3ec352] cursor-pointer"
                    onClick={toggleVariant}
                  >
                    Войти
                  </span>
                </span>
              )}
            </div>
          </div>
          <button
            className="bg-[#005c4b] text-[#ddedef] px-12 py-3 rounded-lg"
            onClick={() => {
              authVariant === "login" ? login() : regiter();
            }}
          >
            <div>
              {authVariant === "login" ? "Войти" : "Зарегистрироваться"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

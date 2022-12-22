import React from "react";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useLocation, NavLink } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div>
      <div className="h-24 mt-[5rem] max-w-lg m-auto h-screen">
        {isLogin ? (
          <div className="max-w-[30rem]  p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#191919] dark:border-[#5d68cf] dark:text-white">
            <h3 className="m-auto text-3xl pb-3">Авторизация</h3>
            <LoginForm />
            <p>
              Нет аккаунта?
              <NavLink
                to={REGISTRATION_ROUTE}
                role="button"
                className="ml-2 hover:underline text-blue-900 dark:text-blue-100"
              >
                Зарегистрироваться
              </NavLink>
            </p>
          </div>
        ) : (
          <div className="max-w-[30rem]  p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#191919] dark:border-gray-700 dark:text-white">
            <h3 className="m-auto text-3xl pb-3">Регистрация</h3>
            <RegisterForm />
            <p>
              Уже есть аккаунт?
              <NavLink
                to={LOGIN_ROUTE}
                role="button"
                className="ml-2 hover:underline text-blue-900 dark:text-blue-100"
              >
                Войти
              </NavLink>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;

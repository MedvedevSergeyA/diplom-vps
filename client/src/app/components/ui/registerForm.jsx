import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { signUp } from "../../store/userSlice";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    surname: "",
    password: ""
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Email введен не корректно"
      }
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву "
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одну цифру"
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8
      }
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения"
      }
    },
    licence: {
      isRequired: {
        message:
          "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    validate();
  }, [data]);
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data
    };
    dispatch(signUp(newData));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Фамилия"
        name="surname"
        value={data.surname}
        onChange={handleChange}
        error={errors.surname}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button
        className="dark:bg-[#14458f] hover:bg-indigo-500 bg-indigo-400 transition duration-150 text-white p-2 rounded-md cursor-pointer"
        type="submit"
        disabled={!isValid}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;

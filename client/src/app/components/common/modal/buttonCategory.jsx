import React from "react";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../../store/modal";

const ButtonCategory = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(modalOpen())}
      className="dark:bg-[#1a247d] dark:text-white flex items-center bg-sky-500 hover:-translate-y-0.5 transition duration-150 text-white p-2 rounded-md cursor-pointer"
    >
      <i className="bi bi-list"></i>
      Категории
    </button>
  );
};

export default ButtonCategory;

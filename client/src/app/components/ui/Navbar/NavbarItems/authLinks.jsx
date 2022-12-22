import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Redux
import { sideBarOpen } from "../../../../store/sideBar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, logOut } from "../../../../store/userSlice";

const AuthLinks = ({ setOpen, open, entities, totalPrice }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserData());

  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(entities);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [entities]);

  return (
    <div>
      {currentUser && (
        <div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute md:right-[14rem] right-6 top-5 cursor-pointer  text-2xl"
          >
            <div className="flex items-center">
              <img
                width="35px"
                height="35px"
                src={currentUser.image}
                alt=""
                className="mr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <ul
            className={`md:flex md:h-[280px] md:flex-col md:items-center md:pb-0 pb-12 absolute md:z-10 md:text-white text-black z-10 ${
              open
                ? "bg-indigo-400 p-4 md:right-[3rem] w-full md:w-[350px] rounded-b-[20px] right-0 top-[4rem] md:top-[4.6rem]"
                : "top-[-490px] md:w-[350px] w-full right-0"
            }`}
          >
            <li className=" text-white mb-6 md:mt-4 items-center text-xl md:my-0">
              <i className="mt-5 mr-3">{currentUser.name}</i>
            </li>
            <li className=" text-white mb-6 md:mt-4 items-center text-xl md:my-0">
              <Link className="" to="/favourite">
                <i className="mt-5 mr-3">Избранное</i>
                <i className="bi bi-heart text-red-600"></i>
              </Link>
            </li>
            <li className=" text-white mb-6 md:mt-4 items-center text-xl md:my-0">
              <Link className="" to="/">
                <i className="mt-5 mr-3">На главную</i>
              </Link>
            </li>
            <li className="md:hidden md:ml-8 text-xl md:my-0">
              <div
                className="bg-[#D9D9D9] bg-opacity-25 p-2 rounded-[10px] w-full mb-5"
                role="button"
                onClick={() => dispatch(sideBarOpen())}
              >
                <div className="ml-32 md:ml-0">
                  <span className="border-r-[1px] pr-2">{totalPrice} ₽</span>
                  <i className="bi bi-cart4 text-[25px] text-[18px] pl-2"></i>
                  <span className="">{entities.length}</span>
                </div>
              </div>
            </li>
            <li className="text-xl md:my-0">
              <button
                onClick={() => dispatch(logOut())}
                className=" text-white rounded-[10px] w-full border border-1 border-blue-200 py-1 px-14 md:mt-20"
              >
                Выйти
              </button>
            </li>
          </ul>
          <div
            className="hidden md:block bg-[#D9D9D9] bg-opacity-25 p-2 rounded-[10px] w-full"
            role="button"
            onClick={() => dispatch(sideBarOpen())}
          >
            <div className="ml-28 md:ml-0">
              <span className="border-r-[1px] pr-2">{totalPrice} ₽</span>
              <i className="bi bi-cart4 text-[25px] text-[18px] pl-2"></i>
              <span className="ml-2">{entities.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
AuthLinks.propTypes = {
  currentUser: PropTypes.array,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  entities: PropTypes.array,
  totalPrice: PropTypes.number
};

export default AuthLinks;

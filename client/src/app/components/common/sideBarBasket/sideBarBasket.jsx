import React from "react";
import BasketCartItem from "./basketCartItem";

// redux
import { useDispatch, useSelector } from "react-redux";
import { sideBarClose } from "../../../store/sideBar";
import { clearDevice } from "../../../store/basketSlice";

const SideBarBasket = () => {
  const dispatch = useDispatch();
  const device = useSelector((state) => state.basket.entities);
  const { totalPrice } = useSelector((state) => state.basket);
  return (
    <>
      <div className=" fixed left-0 top-0 z-50 w-[100%] h-[100%] bg-[#00000066] overflow-x-scroll">
        <div className="dark:bg-gray-100 absolute md:w-[420px] w-[400px] h-[100%] right-0 h-auto p-[30px] bg-white flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="mb-[15px] text-[24px]">Корзина</h2>
            </div>
            <button
              className="transition ease-in-out delay-75 hover:-translate-y-0.5 hover:scale-110"
              onClick={() => dispatch(sideBarClose())}
            >
              <i className="bi bi-x-lg text-[20px]"></i>
            </button>
          </div>

          {device.map((device) => (
            <BasketCartItem key={device._id} {...device} />
          ))}
          <div className="mt-[550px]">
            <div
              className="flex items-center mb-3"
              role="button"
              onClick={() => dispatch(clearDevice())}
            >
              <p>Очистить корзину</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
            <ul>
              <li className="flex items-end">
                <span>Итог</span>
                <div className="flex-1 relative -top-1 mx-[7px] h-1 border-dashed border-[#DFDFDFl] border-b"></div>
                <b>{totalPrice} ₽</b>
              </li>
            </ul>
            <button className="mt-[5px] w-[100%] h-[55px] bg-[#9dd558] rounded-[18px] border-0 text-[16px] text-white">
              Оплатить заказ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarBasket;

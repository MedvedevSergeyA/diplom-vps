import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DEVICE_ROUTE } from "../../../utils/consts";

// redux
import { useDispatch, useSelector } from "react-redux";
import { minusItem, addDevice, removeDevice } from "../../../store/basketSlice";

const BasketCartItem = ({ _id, img, name, price }) => {
  const dispatch = useDispatch();
  const basketItem = useSelector((state) =>
    state.basket.entities.find((obj) => obj._id === _id)
  );
  const addedCount = basketItem ? basketItem.count : 0;
  const onClickPlus = () => {
    dispatch(
      addDevice({
        _id
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(_id));
  };
  const onRemoveDevice = () => {
    if (window.confirm("Вы уверены, что хотите удалить товар? ")) {
      dispatch(removeDevice(_id));
    }
  };
  return (
    <div className="flex items-center mt-10 border-2 rounded-[20px] border-[#f3f3f3] dark:border-gray-200 overflow-hidden p-[20px]">
      <div>
        <img
          src={img}
          width={70}
          height={70}
          alt="device"
          className="mr-[20px]"
        />
      </div>
      <div className="mr-[75px] ml-5">
        <Link to={DEVICE_ROUTE + "/" + _id}>
          <p className="mb-5 text-[14px] hover:underline">{name}</p>
        </Link>
        <b className="text-[12px]">Цена: {price} ₽</b>
        <div className="mt-3">
          <button
            disabled={addedCount === 1}
            className="border border-solid mr-2  px-[9px] py-[1px] cursor-pointer rounded-[50%] border-indigo-300"
            onClick={onClickMinus}
          >
            -
          </button>
          <i>{addedCount}</i>
          <button
            className="border border-solid ml-2 px-[7px] py-[1px] cursor-pointer rounded-[50%] border-indigo-300"
            onClick={onClickPlus}
          >
            +
          </button>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        role="button"
        className="w-6 h-6 border-2 rounded-[5px] opacity-[0.5] hover:opacity-100 transition-opacity"
        onClick={onRemoveDevice}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

BasketCartItem.propTypes = {
  _id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
};

export default BasketCartItem;

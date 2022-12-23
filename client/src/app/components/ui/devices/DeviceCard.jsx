import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getDeviceById } from "../../../store/deviceSlice";
import { addDevice } from "../../../store/basketSlice";
import {
  addDeviceToFavourite,
  delStatusFavouriteDeviceById
} from "../../../services/localStorage.service";
import Comments from "../../common/Comments/Comments";

const DeviceCard = ({ _id }) => {
  const device = useSelector(getDeviceById(_id));
  const [favourite, setFavourite] = useState(false);
  const { img, name, price } = device;
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      _id,
      img,
      name,
      price
    };
    dispatch(addDevice(item));
  };

  const handleFavourite = (id) => {
    if (favourite) {
      delStatusFavouriteDeviceById(id);
      setFavourite(false);
    } else {
      addDeviceToFavourite(id);
      setFavourite(true);
    }
  };
  return (
    <div className="dark:md:min-h-screen container items-center mt-16 mx-auto">
      <h1 className="mb-5 ml-5 font-bold text-lg dark:text-gray-300">
        Характирестики товара: {device.name}
      </h1>
      <div className="dark:bg-[#191919] dark:text-gray-300 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 w-auto p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={device.img} className="w-[350px] sm:m-auto" alt="" />
        <div className="sm:m-auto lg:mt-2">
          <h1 className="mb-3">{device.name}</h1>
          Рейтинг:
          <span className="ml-2">
            <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
            {device.rate}
          </span>
          <p>Краткое описание: {device.description}</p>
        </div>
        <div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p className="w-full bg-gray-50 p-2 text-lg mb-3 dark:bg-[#191919]">
              Цена: {device.price} ₽
            </p>
            <button
              onClick={onClickAdd}
              className="dark:bg-gradient-to-br from-blue-700 to-indigo-600 w-full dark:hover:text-white text-white mb-3 items-center bg-gradient-to-br from-sky-300 to-indigo-300 hover:scale-95 transition-all duration-300 delay-75 p-2 rounded-md"
            >
              В корзину
            </button>

            <button
              onClick={() => handleFavourite(_id)}
              className="dark:bg-gradient-to-r dark:from-blue-900 dark:to-[#1f1461] w-full items-center bg-gradient-to-r from-indigo-300 to-sky-600  hover:text-white transition duration-150 text-white p-2 rounded-md"
            >
              Добавить в избранное
            </button>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};
DeviceCard.propTypes = {
  _id: PropTypes.string
};
export default DeviceCard;

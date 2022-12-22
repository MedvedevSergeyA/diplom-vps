import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../../../utils/consts";
import PropTypes from "prop-types";
// Style
import { Rating } from "flowbite-react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addDevice } from "../../../store/basketSlice";

// LS
import {
  addDeviceToFavourite,
  delStatusFavouriteDeviceById,
  getStatusFavouriteDeviceById
} from "../../../services/localStorage.service";

const Device = ({ _id, img, name, price, rate, reviews }) => {
  const [favourite, setFavourite] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const basketItem = useSelector((state) =>
    state.basket.entities.find((obj) => obj._id === _id)
  );

  const addedCount = basketItem ? basketItem.count : 0;

  useEffect(() => {
    const status = getStatusFavouriteDeviceById(_id);
    setFavourite(status);
  }, []);

  const handleFavourite = (id) => {
    if (favourite) {
      delStatusFavouriteDeviceById(id);
      setFavourite(false);
    } else {
      addDeviceToFavourite(id);
      setFavourite(true);
    }
  };

  const onClickAdd = () => {
    const item = {
      _id,
      img,
      name,
      price
    };
    dispatch(addDevice(item));
  };
  const styledFavourite = favourite
    ? "fill-red-600 text-red-600"
    : "hover:fill-red-600 text-red-600";

  return (
    <div
      key={_id}
      className="flex flex-col md:mx-auto md:w-[19rem] w-full items-center mt-4"
    >
      <div className="">
        <div>
          <div>
            <button
              onClick={() => handleFavourite(_id)}
              className="transition ease-in-out delay-75 hover:-translate-y-1 duration-300 w-1"
            >
              <span className="sr-only">Add to favourite</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-6 ml-36 ${styledFavourite}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
        <img
          className="w-[166x] h-[144px] transition-all duration-300 delay-75 hover:scale-105 cursor-zoom-in"
          src={img}
          alt="device"
        />
      </div>
      <div>
        <div className="flex flex-col items-center mt-2">
          <div>
            <Rating>
              <Rating.Star />
              <p className="text-sm font-bold text-gray-900 dark:text-[#808080] ">
                {rate}
              </p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <Link
                to="/"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-[#808080]"
              >
                {reviews} Просмотров
              </Link>
            </Rating>
          </div>
          <div className="dark:text-white items-center mt-3">
            <h3
              className="hover:underline"
              onClick={() => history.push(DEVICE_ROUTE + "/" + _id)}
              role="button"
            >
              {name}
            </h3>
            <div className="">
              <p>Цена: {price} ₽</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex">
        <button
          className="flex bg-indigo-300 rounded-[30px] px-[9px] py-[5px] min-w-[70px] align-middle items-center mx-auto border-1"
          onClick={onClickAdd}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <div>
            <span className="ml-2">Добавить</span>
            {addedCount > 0 && (
              <i className="inline-block rounded-[30px] bg-indigo-100 w-[20px] h-[20px] relative top-[-5px] left-[3px] text-xs">
                {addedCount}
              </i>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

Device.propTypes = {
  _id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
  reviews: PropTypes.number
};

export default Device;

import React from "react";
import PropTypes from "prop-types";
import { DEVICE_ROUTE } from "../../../utils/consts";
import { useHistory } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { addDevice } from "../../../store/basketSlice";

const FavouriteDeviceCard = ({ _id, img, name, price, remove }) => {
  const history = useHistory();
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
  return (
    <div key={_id} className="w-full md:mt-24 mt-5">
      <hr />
      <div className="md:flex md:justify-between mt-5 mx-auto mb-2">
        <div className="md:ml-16 flex">
          <div className="md:mr-24 ml-10 mr-4">
            <img className="w-[120px] h-[144px]" src={img} alt="deviceImg" />
          </div>
          <div>
            <h3 className="md:text-[19px] text-[15px] dark:text-gray-500 mb-8 font-bold md:mb-12">
              {name}
            </h3>
            <div className="text-[15px] dark:text-gray-400 text-black hover:underline mb-2 ">
              <button onClick={() => history.push(DEVICE_ROUTE + "/" + _id)}>
                На страницу товара
              </button>
            </div>
            <div>
              <button
                onClick={() => remove(_id)}
                className="text-[13px] text-gray-500"
              >
                Удалить из избранного
              </button>
            </div>
          </div>
        </div>
        <div className="md:mr-24 md:text-[19px] md:mb-5 align-middle text-center md:mt-0 mt-5">
          <p className="mb-2 ml-1">Цена: {price} ₽</p>{" "}
          <button
            onClick={onClickAdd}
            className="dark:bg-gray-600 border border-1 rounded-[15px] hover:scale-110 transition-all duration-300 delay-75 bg-gradient-to-br from-sky-300 to-indigo-300 text-white p-3"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

FavouriteDeviceCard.propTypes = {
  _id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  remove: PropTypes.func
};

export default FavouriteDeviceCard;

import React, { useEffect, useState } from "react";
import FavouriteDeviceCard from "../components/common/FavouriteDeviceCard/favouriteDeviceCard";

// LS
import {
  delStatusFavouriteDeviceById,
  getFavouriteDevice
} from "../services/localStorage.service";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getDeviceById, loadDeviceList } from "../store/deviceSlice";

const Favourite = () => {
  const device = getFavouriteDevice();
  const [favourite, setFavourite] = useState([]);
  const dispatch = useDispatch();
  let list = [];

  if (device.length > 0) {
    list = device.map((item) => useSelector(getDeviceById(item)));
  }

  useEffect(() => {
    dispatch(loadDeviceList());
    setFavourite(list);
  }, []);
  const handleDelete = (id) => {
    delStatusFavouriteDeviceById(id);
  };

  return (
    <div className="dark:md:min-h-screen">
      <div className="flex justify-center md:mt-5 mt-3 text-center">
        <h3 className="dark:text-white text-2xl">Избранное</h3>
        <i className="inline-block rounded-[30px] dark:text-black bg-gray-200 w-[20px] h-[20px] relative top-[1px] left-[4px] text-xs">
          {list.length > 0 ? list.length : " "}
        </i>
      </div>
      <div>
        {list.length > 0 ? (
          favourite.map((device) => {
            return (
              <div key={device._id} className="flex flex-wrap">
                <FavouriteDeviceCard {...device} remove={handleDelete} />
              </div>
            );
          })
        ) : (
          <div className="md:mx-auto text-center">
            <h3>Список избранных: пусто</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;

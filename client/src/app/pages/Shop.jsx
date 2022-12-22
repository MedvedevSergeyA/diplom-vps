import React from "react";
import Slider from "../components/ui/Slider";
import Search from "../components/ui/search";
import AllDeviceList from "../components/ui/devices/AllDeviceList";

const Shop = () => {
  return (
    <div className="w-[100%] h-[100%] dark:h-[1200px]">
      <Search />
      <Slider />
      <AllDeviceList title="Список товаров" />
    </div>
  );
};

export default Shop;

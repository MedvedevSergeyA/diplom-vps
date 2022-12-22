import React, { useEffect, useState } from "react";
import DeviceCard from "../components/ui/devices/DeviceCard";
import Loader from "../components/common/Loader/loader";
import { useParams } from "react-router-dom";

const DevicePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { _id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <div>{isLoading ? <Loader /> : <DeviceCard _id={_id} />}</div>;
};

export default DevicePage;

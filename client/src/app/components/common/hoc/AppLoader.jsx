import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeviceLoadingStatus, loadDeviceList } from "../../../store/deviceSlice";
import PropTypes from "prop-types";
import Loader from "../Loader/loader";
import { getCurrentUserId, loadUsersList } from "../../../store/userSlice";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const deviceStatus = useSelector(getDeviceLoadingStatus())
  const currentUserId = useSelector(getCurrentUserId)

  useEffect(() => {
    dispatch(loadDeviceList());
    dispatch(loadUsersList());
  }, [currentUserId]);

  if (deviceStatus) {
    return <Loader />;
  }
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default AppLoader;

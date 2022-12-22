import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDeviceList } from "../../../store/deviceSlice";
import PropTypes from "prop-types";
import Loader from "../Loader/loader";
import { getUsersLoadingStatus, loadUsersList } from "../../../store/userSlice";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const usersLoading = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    dispatch(loadDeviceList());
    dispatch(loadUsersList());
  }, []);

  if (usersLoading) {
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

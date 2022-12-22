import { createSlice } from "@reduxjs/toolkit";
import deviceService from "../services/devices.services";
import isOutDated from "../utils/isOutDated";

const initialState = {
  entities: [],
  isLoading: false,
  error: null,
  value: "",
  lastFetch: null,
  isAdded: false
};
const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    deviceRequested: (state) => {
      state.isLoading = true;
    },
    deviceReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    deviceRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: deviceReducer, actions } = deviceSlice;

const { deviceRequested, deviceReceived, deviceRequestFailed } = actions;

export const loadDeviceList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().device;
  if (isOutDated(lastFetch)) {
    dispatch(deviceRequested());
    try {
      const { content } = await deviceService.get();
      dispatch(deviceReceived(content));
    } catch (error) {
      dispatch(deviceRequestFailed(error));
    }
  }
};

export const getDeviceById = (deviceId) => (state) => {
  if (state.device.entities) {
    return state.device.entities.find((d) => d._id === deviceId);
  }
};

export const getDeviceList = () => (state) => state.device.entities;
export const getDeviceLoadingStatus = () => (state) => state.device.isLoading;

export default deviceReducer;

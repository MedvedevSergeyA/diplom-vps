import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./deviceSlice";
import sideBarReducer from "./sideBar";
import basketReducer from "./basketSlice";
import usersReducer from "./userSlice";
import commentsReducer from "./commentSlice";

const rootReducer = combineReducers({
  device: deviceReducer,
  sidebar: sideBarReducer,
  basket: basketReducer,
  users: usersReducer,
  comments: commentsReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}

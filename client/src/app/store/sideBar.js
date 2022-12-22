import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
};
const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sideBarOpen: (state, action) => {
      state.isOpen = true;
    },
    sideBarClose: (state, action) => {
      state.isOpen = false;
    }
  }
});

const { reducer: sideBarReducer } = sideBarSlice;

export const { sideBarOpen, sideBarClose } = sideBarSlice.actions;

export default sideBarReducer;

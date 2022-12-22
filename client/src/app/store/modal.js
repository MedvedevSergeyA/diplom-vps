import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, action) => {
      state.isOpen = true;
    },
    modalClose: (state, action) => {
      state.isOpen = false;
    }
  }
});

const { reducer: modalReducer } = modalSlice;

export const { modalOpen, modalClose } = modalSlice.actions;

export default modalReducer;

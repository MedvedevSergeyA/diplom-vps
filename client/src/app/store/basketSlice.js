import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../utils/calkTotalPrice";
import { getCartFromLocalStorage } from "../services/localStorage.service";

const cartData = getCartFromLocalStorage();

const initialState = {
  entities: cartData.items,
  totalPrice: cartData.totalPrice
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      const findItem = state.entities.find(
        (obj) => obj._id === action.payload._id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.entities.push({
          ...action.payload,
          count: 1
        });
      }
      state.totalPrice = calcTotalPrice(state.entities);
    },
    minusItem: (state, action) => {
      const findItem = state.entities.find((obj) => obj._id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.entities);
    },
    removeDevice: (state, action) => {
      state.entities = state.entities.filter(
        (obj) => obj._id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.entities);
    },
    clearDevice: (state, action) => {
      state.entities = [];
      state.totalPrice = 0;
    }
  }
});

const { reducer: basketReducer } = basketSlice;

export const { addDevice, removeDevice, clearDevice, minusItem } =
  basketSlice.actions;

export default basketReducer;

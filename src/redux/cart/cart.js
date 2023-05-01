import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
} from "./cartUtils";

const initialState = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeFromCart: (state, action) => {
      const SHIPPING_COST = 300;
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
      state.shippingCost = resetShippingCost(state.cartItems, SHIPPING_COST);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.shippingCost = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

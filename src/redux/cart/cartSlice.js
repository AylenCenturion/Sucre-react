import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
} from "./cartUtils";

const SHIPPING_COST = 300;

const initialState = {
  cart: [],
  shippingCost: 0,
  totalQuantity: 0,
  totalPrice: 0,
  modal: false,
  loader: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = addItemToCart(state.cart, action.payload);
      state.shippingCost = SHIPPING_COST;
    },
    productModal: (state) => {
      state.modal = !state.modal;
    },
    handleLoader: (state) => {
      state.loader = !state.loader;
    },
    removeFromCart: (state, action) => {
      state.cart = removeItemFromCart(state.cart, action.payload);
      state.shippingCost = resetShippingCost(state.cart, SHIPPING_COST);
    },
    getCartTotal: (state) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (total, item) => {
          const { price, quantity } = item;
          const itemTotal = price * quantity;
          total.totalQuantity += quantity;
          total.totalPrice += itemTotal;
          return total;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
    clearCart: (state) => {
      state.cart = [];
      state.shippingCost = 0;
    },
  },
});

export const {
  addToCart,
  productModal,
  removeFromCart,
  handleLoader,
  getCartTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

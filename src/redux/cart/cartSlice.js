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
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = addItemToCart(state.cart, action.payload);
      state.shippingCost = SHIPPING_COST;
    },
    removeFromCart: (state, action) => {
      state.cart = removeItemFromCart(state.cart, action.payload);
      state.shippingCost = resetShippingCost(state.cart, SHIPPING_COST);
    },
    getCartTotal: (state) => {
      let { totalPrice } = state.cart.reduce(
        (total, item) => {
          const { price, quantity } = item;
          const itemTotal = price * quantity;
          total.totalPrice += itemTotal;
          return total;
        },
        {
          totalPrice: 0,
        }
      );
      state.totalPrice = totalPrice;
    },
    clearCart: (state) => {
      state.cart = [];
      state.shippingCost = 0;
    },
  },
});

export const { addToCart, removeFromCart, getCartTotal, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

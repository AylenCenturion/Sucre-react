import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgerDrop: false,
  cartDrop: false,
  blur: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    handleBurger: (state) => {
      state.burgerDrop = !state.burgerDrop;
      state.cartDrop
        ? (state.cartDrop = !state.cartDrop)
        : (state.blur = !state.blur);
    },
    handleCart: (state) => {
      state.cartDrop = !state.cartDrop;
      state.burgerDrop
        ? (state.burgerDrop = !state.burgerDrop)
        : (state.blur = !state.blur);
    },
    handleBlur: (state) => {
      state.blur = !state.blur;
      state.burgerDrop
        ? (state.burgerDrop = !state.burgerDrop)
        : (state.cartDrop = !state.cartDrop);
    },
  },
});

export const navbarReducer = navbarSlice.reducer;
export const { handleBurger, handleCart, handleBlur } = navbarSlice.actions;

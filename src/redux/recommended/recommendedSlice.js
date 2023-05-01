import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  recommended: Array(4)
    .fill(0)
    .reduce((acc, _item) => {
      const ids = acc.map((value) => value.id);
      let recommendedProduct;
      do {
        recommendedProduct = {
          ...products[Math.floor(Math.random() * products.length)],
        };
      } while (ids.includes(recommendedProduct.id));
      return [...acc, recommendedProduct];
    }, []),
};

const recommendedSlice = createSlice({
  name: "recommended",
  initialState,
  reducers: {
    // render: (state) => {
    //   state
    // },
    // otraAccion: (state, action) => {
    //   state
    // },
  },
});

export const recommendedReducer = recommendedSlice.reducer;
export const recommendedActions = recommendedSlice.actions;

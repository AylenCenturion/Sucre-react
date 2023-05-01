import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  products: products,
  totalProducts: products.length,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;

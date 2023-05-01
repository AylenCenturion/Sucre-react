import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";

const initialState = {
  categories: categories,
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory =
        action.payload !== state.selectedCategory ? action.payload : null;
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;

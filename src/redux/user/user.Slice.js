import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSigninSubmit: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { handleSigninSubmit, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

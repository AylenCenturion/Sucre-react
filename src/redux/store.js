import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { recommendedReducer } from "./recommended/recommendedSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import cartReducer from "../redux/cart/cartSlice";
import { navbarReducer } from "./navbar/navbarSlice";
import { userReducer } from "./user/user.Slice";

const persistConfig = {
  key: "root",
  storage,
};

const cartPersistedReducer = persistReducer(persistConfig, cartReducer);
const userPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    recommended: recommendedReducer,
    categories: categoriesReducer,
    allCart: cartPersistedReducer,
    navbar: navbarReducer,
    user: userPersistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

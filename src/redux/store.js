import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { recommendedReducer } from "./recommended/recommendedSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { cartReducer } from "./cart/cart";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    recommended: recommendedReducer,
    categories: categoriesReducer,
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);

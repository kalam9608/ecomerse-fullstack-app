import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./components/features/products/productListSlice";
import authSlice from "./components/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    product: productListSlice,
    auth: authSlice,
  },
});

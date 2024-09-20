import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./components/features/products/productListSlice";

export const store = configureStore({
  reducer: {
    product: productListSlice,
  },
});

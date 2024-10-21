import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./components/features/products/productListSlice";
import authSlice from "./components/features/auth/authSlice";
import cartListSlice from "./components/features/cart/cartListSlice";
import orderSlice from "./components/features/order/orderSlice";

export const store = configureStore({
  reducer: {
    product: productListSlice,
    auth: authSlice,
    cart: cartListSlice,
    order: orderSlice,
  },
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, getCartItemsById } from "./CartListApi";

const initialState = {
  items: [],
  status: "idle",
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (item) => {
    console.log("item", { item });

    const response = await addToCart(item);
    return response.data;
  }
);

export const getCartItemsAsyncById = createAsyncThunk(
  "cart/getCartItemsAsync",
  async (userId) => {
    // console.log("userid===>",userId);
    
    const response = await getCartItemsById(userId);
    return response.data;
  }
);

export const cartListSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.status = "idle";
      })
      .addCase(getCartItemsAsyncById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCartItemsAsyncById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "idle";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = cartListSlice.actions;
export const selectedItems = (state) => state.cart.items;

export default cartListSlice.reducer;

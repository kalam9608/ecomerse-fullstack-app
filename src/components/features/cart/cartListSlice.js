import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteItem,
  getCartItemsById,
  updateToCart,
} from "./CartListApi";

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
    const response = await getCartItemsById(userId);
    return response.data;
  }
);

export const updateCartItemsAsyncById = createAsyncThunk(
  "cart/updateCartItemsAsyncById",
  async (updateItem) => {
    const response = await updateToCart(updateItem);
    return response.data;
  }
);

export const deleteCartItemsAsyncById = createAsyncThunk(
  "cart/deleteCartItemsAsyncById",
  async (itemId) => {
    const response = await deleteItem(itemId);
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
      })
      .addCase(updateCartItemsAsyncById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCartItemsAsyncById.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => (item.id = action.payload.id)
        );
        state.items[index] = action.payload;
        state.status = "idle";
      })
      .addCase(deleteCartItemsAsyncById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteCartItemsAsyncById.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => (item.id = action.payload.id)
        );
        state.status = "idle";
        state.items.splice(index, 1);
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = cartListSlice.actions;
export const selectedItems = (state) => state.cart.items;

export default cartListSlice.reducer;

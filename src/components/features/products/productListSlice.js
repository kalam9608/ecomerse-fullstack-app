import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productListApi, productListApiByFilter } from "./productListApi";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchProductApi = createAsyncThunk(
  "cart/fetchProductApi",
  async () => {
    const response = await productListApi();
    return response.data;
  }
);

export const fetchProductByFilterAsyncApi = createAsyncThunk(
  "cart/fetchProductByFilterAsyncApi",
  async (filter) => {
    const response = await productListApiByFilter(filter);
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductApi.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProductByFilterAsyncApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductByFilterAsyncApi.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productListSlice.actions;

export default productListSlice.reducer;

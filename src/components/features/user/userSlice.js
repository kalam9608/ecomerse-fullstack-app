import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLogedInUserOrder } from "./userApi";

const initialState = {
  LogedInUserOrder: [],
  status: "idle",
};

export const fetchLogedInUserOrderAsync = createAsyncThunk(
  "cart/fetchLogedInUser",
  async (userId) => {
    // console.log("userid====>",userId);
    
    const response = await fetchLogedInUserOrder(userId);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogedInUserOrderAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLogedInUserOrderAsync.fulfilled, (state, action) => {
        state.LogedInUserOrder = action.payload;
        state.status = "idle";
      });
  },
});

export const {} = userSlice.actions;

export const selectOrders = (state) => state.user.LogedInUserOrder;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchLogedInUserInfo,
  fetchLogedInUserOrder,
  updateUser,
} from "./userApi";

const initialState = {
  LogedInUserOrder: [],
  status: "idle",
  userInfo: null, // this user is used for detail user info
};

export const fetchLogedInUserOrderAsync = createAsyncThunk(
  "cart/fetchLogedInUser",
  async (userId) => {
    // console.log("userid====>",userId);

    const response = await fetchLogedInUserOrder(userId);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUserAsync",
  async (userData) => {
    const response = await updateUser(userData);
    return response.data;
  }
);
export const fetchLogedInUserAsync = createAsyncThunk(
  "user/fetchLogedInUserAsync",
  async (userData) => {
    const response = await fetchLogedInUserInfo(userData);
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
      })
      .addCase(updateUserAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.status = "idle";
      })
      .addCase(fetchLogedInUserAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLogedInUserAsync.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.status = "idle";
      });
  },
});

export const {} = userSlice.actions;

export const selectOrders = (state) => state.user.LogedInUserOrder;
export const selectLogedInUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;

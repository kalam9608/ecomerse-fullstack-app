import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authApi";

const initialState = {
  logedInUser: null,
  status: "success",
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {

    const response = await createUser(userData);
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.logedInUser = action.payload;
        state.status = "success";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productListSlice.actions;

export const selectedUser = (state) => state.auth.logedInUser;

export default productListSlice.reducer;

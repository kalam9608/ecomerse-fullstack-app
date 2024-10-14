import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser } from "./authApi";

const initialState = {
  logedInUser: null,
  status: "success",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  "user/checkUserAsync",
  async (userData) => {
    const response = await checkUser(userData);
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
      })
      .addCase(checkUserAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.logedInUser = action.payload;
        state.status = "success";
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productListSlice.actions;

export const selectedUser = (state) => state.auth.logedInUser;
export const selectError = (state) => state.auth.error;

export default productListSlice.reducer;

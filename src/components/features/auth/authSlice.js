import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser, logoutUser, updateUser } from "./authApi";

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
export const updateUserAsync = createAsyncThunk(
  "user/updateUserAsync",
  async (userData) => {
    const response = await updateUser(userData);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  "user/checkUserAsync",
  async (userData) => {
    const response = await checkUser(userData);
    console.log(response);
    
    return response.data;
  }
);

export const logoutUserAsync = createAsyncThunk(
  "user/logoutUserAsync",
  async (userData) => {
    const response = await logoutUser(userData);
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
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.logedInUser = action.payload;
        state.status = "success";
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = "failed";
      })
      .addCase(updateUserAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.logedInUser = null;
        state.status = "success";
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = "failed";
      })
      .addCase(logoutUserAsync.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productListSlice.actions;

export const selectedUser = (state) => state.auth.logedInUser;
export const selectError = (state) => state.auth.error;

export default productListSlice.reducer;

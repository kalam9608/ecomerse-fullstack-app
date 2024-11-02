import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  productByIdApi,
  productListApi,
  productListApiByFilter,
  productListBrandApi,
  productListCategoryApi,
} from "./productListApi";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: "idle",
  selectProduct: null,
};

export const fetchProductApi = createAsyncThunk(
  "cart/fetchProductApi",
  async () => {
    const response = await productListApi();
    return response.data;
  }
);

export const fetchProductBrandsApi = createAsyncThunk(
  "cart/fetchProductBrandsApi",
  async () => {
    const response = await productListBrandApi();
    return response.data;
  }
);

export const fetchProductCategoryApi = createAsyncThunk(
  "cart/fetchProductCategoryApi",
  async () => {
    const response = await productListCategoryApi();
    return response.data;
  }
);

export const createProductAsync = createAsyncThunk(
  "cart/createProductAsync",
  async (product) => {
    const response = await createProduct(product);
    return response.data;
  }
);

export const fetchProductSelectApi = createAsyncThunk(
  "cart/fetchProductByIdApi",
  async (id) => {
    const response = await productByIdApi(id);
    return response.data;
  }
);

export const fetchProductByFilterAsyncApi = createAsyncThunk(
  "cart/fetchProductByFilterAsyncApi",
  async ({ filter, sort, pagination }) => {
    const response = await productListApiByFilter(filter, sort, pagination);
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
      })
      .addCase(fetchProductBrandsApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductBrandsApi.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProductCategoryApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductCategoryApi.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProductSelectApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductSelectApi.fulfilled, (state, action) => {
        state.selectProduct = action.payload;
        state.status = "idle";
      })
      .addCase(createProductAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.status = "idle";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productListSlice.actions;
export const selectBrand = (state) => state.product.brands;
export const selectCategory = (state) => state.product.categories;
export const selectProduct = (state) => state.product.selectProduct;

export default productListSlice.reducer;

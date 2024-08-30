import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  item: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkAPI) => {
    try {
      // const url = `http://localhost:3004/products/?q=${searchQuery}`;
      const url = `https://my-json-server.typicode.com/Sungmin-Kim-Dev/REACT-thunk-shopping-mall-multipage/products?q=${searchQuery}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getItemDetail = createAsyncThunk(
  "product/singleItem",
  async (id, thunkAPI) => {
    try {
      // const url = `http://localhost:3004/products/${id}`;
      const url = `https://my-json-server.typicode.com/Sungmin-Kim-Dev/REACT-thunk-shopping-mall-multipage/products/${id}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.productList = payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getItemDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItemDetail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })
      .addCase(getItemDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

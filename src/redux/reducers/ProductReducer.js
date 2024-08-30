import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  item: null,
};

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_ITEM":
//       return { ...state, item: payload.data };

//     default:
//       return { ...state };
//   }
// };
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts: (state, { payload }) => {
      state.productList = payload.data;
    },
    getSingleItem(state, action) {
      state.item = action.payload.data;
    },
  },
});

console.log("product Slice:", productSlice);
export const { getAllProducts, getSingleItem } = productSlice.actions;
export default productSlice.reducer;

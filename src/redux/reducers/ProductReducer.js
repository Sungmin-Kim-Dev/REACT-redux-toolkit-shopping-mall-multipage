const initialState = {
  productList: [],
  item: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_ITEM":
      return { ...state, item: payload.data };

    default:
      return { ...state };
  }
};

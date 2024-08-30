// import { applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";
// import { composeWithDevTools } from "@redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer";
import ProductReducer from "./reducers/ProductReducer";

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: ProductReducer,
  },
});


// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );


// combineReducer
// thunk
// applyMiddleware
// devtools

export default store;

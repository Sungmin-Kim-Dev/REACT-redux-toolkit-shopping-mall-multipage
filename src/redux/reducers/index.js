import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import ProductReducer from "./ProductReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: ProductReducer,
});

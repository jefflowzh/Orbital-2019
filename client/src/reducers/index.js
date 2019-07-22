import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import listingsReducer from "./listingsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  listings: listingsReducer
});

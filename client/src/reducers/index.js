import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import caregiverReducer from "./caregiverReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  caregivers: caregiverReducer
});

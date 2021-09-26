import { combineReducers } from "redux";
import { serviceReducer, selectedServiceReducer } from "./serviceReducer";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  auth,
  message,
  allServices: serviceReducer,
  service: selectedServiceReducer,
});

import { combineReducers } from "redux";
import { reducer } from "redux-form"; // Ex: {reducer as formReducer}
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: reducer,
  streams: streamReducer
});

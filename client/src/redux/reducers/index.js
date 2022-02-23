import { combineReducers } from "redux";
import authReducers from "./authReducers";
import noticeReducers from "./noticeReducers";

export default combineReducers({
  authReducers,
  noticeReducers,
});

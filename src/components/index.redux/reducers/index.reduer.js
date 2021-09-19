import { combineReducers } from "redux";
import { userReducer } from "../reducers/user.reducer";

const allReducers = combineReducers({ userReducer: userReducer });
export default allReducers;

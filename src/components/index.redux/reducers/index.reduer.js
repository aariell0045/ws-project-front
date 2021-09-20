import { combineReducers } from "redux";
import { userReducer } from "../reducers/user.reducer";
import { contactReducer } from "./contact.reducer";

const allReducers = combineReducers({ userReducer: userReducer, contactReducer: contactReducer });
export default allReducers;

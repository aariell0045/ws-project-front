import { combineReducers } from "redux";
import { userReducer } from "../reducers/user.reducer";
import { contactReducer } from "./contact.reducer";
import { messageToSendReducer } from "./messageToSend";

const allReducers = combineReducers({
	userReducer: userReducer,
	contactReducer: contactReducer,
	messageToSendReducer: messageToSendReducer,
});
export default allReducers;

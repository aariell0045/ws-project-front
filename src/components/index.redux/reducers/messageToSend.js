import { messageToSend } from "../constants/constants";
const INITIAL_STATE = {
	currentMessage: {},
	currentGroup: {},
};

export const messageToSendReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case messageToSend.ADD_CURRENT_MESSAGE:
			return {
				...state,
				currentMessage: action.payload,
			};
		case messageToSend.ADD_CURRENT_GROUP:
			return {
				...state,
				currentGroup: action.payload,
			};
		default:
			return state;
	}
};

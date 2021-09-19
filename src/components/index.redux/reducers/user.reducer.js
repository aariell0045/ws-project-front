import { userActionType } from "../constants/constants";

export const userReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case userActionType.ADD_USER_ID:
			return {
				...state,
				userId: action.payload,
			};
		default:
			return state;
	}
};

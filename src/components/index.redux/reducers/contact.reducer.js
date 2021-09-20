import { contactsActionType } from "../constants/constants";

export const contactReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case contactsActionType.FETCH_CONTACTS_LIST:
			return {
				...state,
				contactsList: action.payload,
			};
		default:
			return state;
	}
};

import { contactsActionType, userActionType } from "../constants/constants";

export const addUserId = (userId) => ({
	type: userActionType.ADD_USER_ID,
	payload: userId,
});

export const fetchContactsList = (contactsList) => ({
	type: contactsActionType.FETCH_CONTACTS_LIST,
	payload: contactsList,
});

import { contactsActionType, messageToSend, userActionType } from "../constants/constants";

export const addUserId = (userId) => ({
	type: userActionType.ADD_USER_ID,
	payload: userId,
});

export const fetchContactsList = (contactsList) => ({
	type: contactsActionType.FETCH_CONTACTS_LIST,
	payload: contactsList,
});


export const fetchCurrentMessage = (currentMessage) => ({
	type: messageToSend.ADD_CURRENT_MESSAGE,
	payload: currentMessage
})


export const fetchCurrentGroup = (currentGroup) => ({
	type: messageToSend.ADD_CURRENT_GROUP,
	payload: currentGroup
})
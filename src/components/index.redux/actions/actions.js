import { userActionType } from "../constants/constants";

export const addUserId = (userId) => ({
	type: userActionType.ADD_USER_ID,
	payload: userId,
});


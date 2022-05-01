import {
	CREATE_POST,
	GET_POSTS,
	GET_POST,
	GET_USER_POSTS,
	UPDATE_POST,
	DELETE_POST,
	FETCH_ERROR
} from "../types";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload
			};
		case GET_POST:
			return {
				...state,
				post: action.payload
			};
		case GET_USER_POSTS:
			return {
				...state,
				posts: action.payload
			};
		case CREATE_POST:
			return {
				...state,
				post: action.payload.post,
				message: action.paload.message
			};
		case UPDATE_POST:
			return {
				...state,
				message: action.payload
			};
		case DELETE_POST:
			return {
				...state,
				message: action.payload
			};
		default:
			return state;
	}
};
export default AuthReducer;

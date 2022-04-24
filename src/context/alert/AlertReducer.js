import { SET_ERROR, CLEAR_ERROR } from "../types";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				alert: action.payload,
			}
		case CLEAR_ERROR:
			return {
				...state,
				alert: null,
			}
		default:
			return state;
	}
};
export default AuthReducer;

import { LOAD_USER, LOGOUT, LOGIN, AUTH_ERROR } from "../types";
import { useReducer } from "react";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case LOAD_USER:
			return;
		case LOGIN:
			return;
		case LOGOUT:
			return;
		case AUTH_ERROR:
			return;
		default:
			return state;
	}
};
export default AuthReducer;

import { SHOW_ALERT, CLEAR_ALERT } from "../types";
import { useReducer } from "react";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return;
		case CLEAR_ALERT:
			return;
		default:
			return state;
	}
};
export default AuthReducer;

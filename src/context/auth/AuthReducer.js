import { LOAD_USER, CLEAR_ERROR, LOGOUT, LOGIN, AUTH_ERROR, REGISTER, GET_USER_STATS } from "../types";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case LOAD_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
				isLoading: false
			};
		case LOGIN:
			localStorage.setItem("token", action.payload);
			return {
				...state,
				token: action.payload,
			};
		case REGISTER:
			localStorage.setItem("token", action.payload);
			return {
				...state,
				token: action.payload,
			};
		case GET_USER_STATS:
			return {
				...state,
				stats: action.payload,
			};
		case LOGOUT:
		case AUTH_ERROR:
			localStorage.removeItem("token");
			return {
				...state,
				user: null,
				isAuthenticated: false,
				error: action.payload,
				isLoading: false,
				token: null
			}
		case CLEAR_ERROR:
			return {
				...state,
				error: null
			}
		default:
			return state;
	}
};
export default AuthReducer;

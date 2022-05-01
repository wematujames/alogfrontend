import { useReducer, useEffect } from "react";
import {
	LOGIN,
	LOGOUT,
	CLEAR_AUTH_ERRORS,
	AUTH_ERROR,
	LOAD_USER,
	CLEAR_ERROR
} from "../types";
import axios from "axios";
//Local
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import setAuthHeader from "../../utils/setAuthHeader";

//requests
const AuthState = props => {
	const initialState = {
		isAuthenticated: false,
		user: null,
		error: null,
		loading: null,
		token: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	//login user
	const logIn = async body => {
		try {
			console.log(body);
			const res = await axios.post("/auth/login", body);
			dispatch({ type: LOGIN, payload: res.data.token });
			loadUser();
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.response.data.msg });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		}
	};

	//logout user
	const logout = () => {
		dispatch({ type: LOGOUT });
	};

	//load user
	const loadUser = async () => {
		try {
			if (localStorage.token) setAuthHeader(localStorage.token);
			const res = await axios.get("auth/me");
			dispatch({ type: LOAD_USER, payload: res.data.data });
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.response.data.msg });
		}
	};
	//clear auth errors
	const clearErrors = () => {
		dispatch({ type: CLEAR_AUTH_ERRORS });
	};

	// 'watch' state.token and set headers and local storage on any change
	useEffect(() => {
		if (state.token) {
			setAuthHeader(state.token);
		loadUser();
		}
	}, [state.token]);

	// load user on first run or refresh
	// if (state.loading) {
		
	// }

	return (
		<AuthContext.Provider
			value={{
				error: state.error,
				token: state.token,
				user: state.user,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				logIn,
				logout,
				loadUser,
				clearErrors
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;

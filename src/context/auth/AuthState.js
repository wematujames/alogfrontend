import { useReducer } from "react";
import { LOGIN, LOGOUT, AUTH_ERROR, LOAD_USER } from "../types";
import axios from "axios";
//Local
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

//axios config
const customAxios = axios.create({
	baseURL: "http://localhost:5000/api/v1/auth"
});

const AuthState = props => {
	const initialState = {
		isAuthenticated: false,
		user: null,
		errors: null,
		isLoading: false,
		token: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	//login user
	const login = async body => {
		try {
			const res = await customAxios.post("/login", body);
			console.log(res.data);
		} catch (err) {
			console.log("err", err);
		}
	};
	//load user
	const logout = () => {};
	//load user
	const loadUser = () => {};

	return (
		<AuthContext.Provider
			value={{
				errors: state.errors,
				token: state.token,
				user: state.user,
				isAuthenticated: state.isAuthenticated,
				isLoading: state.isLoading,
				login,
				logout,
				loadUser
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;

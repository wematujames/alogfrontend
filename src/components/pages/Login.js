import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Hooks
import useAuth from "../../hooks/useAuth";

//Components
import LoginForm from "../auth/LoginForm";

function Login(props) {
	//Context
	const authContext = useAuth();
	const { user, loadUser, loading } = authContext;

	//Routing
	const location = useLocation();
	const navigate = useNavigate();
	const from = location?.state?.from?.pathname || "/";

	//Handle after effects
	useEffect(() => {
		if (localStorage.token) loadUser();

		if (user) navigate(from, { replace: true });

		//eslint-disable-next-line
	}, [localStorage.token, user]);

	return loading ? <h1>Loading...</h1> : <LoginForm />;
}

export default Login;

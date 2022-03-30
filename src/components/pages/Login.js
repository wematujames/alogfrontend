import React, { useContext, useState } from "react";

import AuthContext from "../../context/auth/AuthContext";
import AlertContext from "../../context/alert/AlertContext";

function Login() {
	const [fData, setFData] = useState({
		email: "",
		password: ""
	});

	const authContext = useContext(AuthContext);

	const { login, loadUser } = authContext;

	const loginUser = e => {
		e.preventDefault();
		console.log(fData);

		login(fData);
	};

	const handleChange = e => {
		setFData(prev => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	return (
		<form onSubmit={loginUser}>
			<input
				value={fData.email}
				onChange={handleChange}
				type="email"
				name="email"
				id="email"
			/>
			<input
				value={fData.password}
				onChange={handleChange}
				type="password"
				name="password"
				id="password"
			/>
			<input type="submit" value="Login" />
		</form>
	);
}

export default Login;

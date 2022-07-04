"use strict";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

//Local imports
//Components
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import UpdatePost from "./components/pages/UpdatePost";
import About from "./components/pages/About";
import RequireAuth from "./components/routing/PrivateRoute";

//config / utils
import setAuthHeader from "./utils/setAuthHeader";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.headers.common["Content-Type"] = "application/json";
if (localStorage.token) {
	setAuthHeader(localStorage.token);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* Public routes */}
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="about" element={<About />} />

				{/* Protected routes */}
				<Route element={<RequireAuth />}>
					<Route path="/" element={<Home />} />
					<Route path="updatepost" element={<UpdatePost />} />
				</Route>

				{/* Page not found */}
				<Route path="*" element={<h1>Page not found!!</h1>} />
			</Route>
		</Routes>
	);
}
export default App;

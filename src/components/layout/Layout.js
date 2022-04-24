import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import useAuth from "../../hooks/useAuth";

function Layout() {
	const { user } = useAuth();

	return (
		<main className='App'>
			{user && <Navbar />}
			<Outlet />
		</main>
	);
}

export default Layout;

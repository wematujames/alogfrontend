import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

import Navbar from "./Navbar";

import useAuth from "../../hooks/useAuth";

function Layout() {
	const { user } = useAuth();

	return (
		<Box bg='app.bg' minHeight='100vh'>
			<main className='App' style={styles.mainWrapper}>
				{user && <Navbar />}
				<Box mx='auto' width={["95%", "90%", "85%"]} maxW='1200px'>
					<Outlet />
				</Box>
			</main>
		</Box>
	);
}

const styles = {
	mainWrapper: {
		minHeight: "100vh",
		minWidth: "100vw"
	}
};

export default Layout;

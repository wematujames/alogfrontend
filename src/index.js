import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


//Local imports
import "./dist/css/index.css";

//Components
import App from "./App";

//Auth authorization
import AuthProvider  from "./context/auth/AuthState"
import AlertProvider from "./context/alert/AlertState"

ReactDOM.render(
	<BrowserRouter>
		<AuthProvider>
			<AlertProvider>
				<ChakraProvider>
						<Routes>
							<Route path="/*" element={<App />} />
						</Routes>
				</ChakraProvider>
			</AlertProvider>
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById("root")
);

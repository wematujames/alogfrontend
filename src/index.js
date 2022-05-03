import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//Local imports
import theme from "./theme/theme";
import App from "./App";

//Auth authorization
import AuthProvider from "./context/auth/AuthState";
import AlertProvider from "./context/alert/AlertState";
import PostsProvider from "./context/posts/PostsState";

ReactDOM.render(
	<BrowserRouter>
		<AuthProvider>
			<AlertProvider>
				<PostsProvider>
					<ChakraProvider theme={theme}>
						<Routes>
							<Route path='/*' element={<App />} />
						</Routes>
					</ChakraProvider>
				</PostsProvider>
			</AlertProvider>
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById("root")
);

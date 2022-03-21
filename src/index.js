import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//Local imports
import "./dist/css/index.css";

//Components
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

import { Route, Switch } from "react-router-dom";
import axios from "axios";

//Local imports
//Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import EditPost from "./components/pages/EditPost";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
//context
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
//config/ utils
import setAuthHeader from "./dist/utils/setAuthHeader";

//set token app load
if (localStorage.token) {
	setAuthHeader(localStorage.token);
}
//axios config
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

function App() {
	return (
		<AuthState>
			<AlertState>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/editpost">
							<EditPost />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Switch>
					<Footer />
				</div>
			</AlertState>
		</AuthState>
	);
}
export default App;

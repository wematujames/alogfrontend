import { Route, Switch } from "react-router-dom";
//Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import EditPost from "./components/pages/EditPost";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";

function App() {
	return (
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
	);
}
export default App;

import { Children, useReducer } from "react";
import { SHOW_ALERT, CLEAR_ALERT } from "../types";

//Local
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = props => {
	const initialState = [];

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	//show alert
	const show_alert = () => {};
	//remove alert
	const removeAlert = () => {};

	return (
		<AlertContext.Provider
			value={{
				alerts: state
			}}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;

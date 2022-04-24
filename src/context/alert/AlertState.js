import { useReducer } from "react";
import { SET_ERROR, CLEAR_ERROR } from "../types";

//Local
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = props => {
	const initialState = {
		alert: null
	};

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	//Set auth error
	const setAlert = msg => {	
		dispatch({ type: SET_ERROR, payload: msg })
		setTimeout(() => {	
			dispatch({ type: CLEAR_ERROR, payload: msg })
		}, 5000)
	}

	return (
		<AlertContext.Provider
			value={{
				alert: state.alert,
				setAlert
			}}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;

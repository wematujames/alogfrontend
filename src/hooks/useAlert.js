import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

const useAlert = () => {
	return useContext(AlertContext);
};

export default useAlert;

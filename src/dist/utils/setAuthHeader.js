import axios from "axios";

const setAuthHeader = token => {
	if (localStorage.token) {
		axios.defaults.headers.common.authorization = `Bearer ${localStorage.token}`;
	} else {
		delete axios.defaults.headers.authorization;
	}
};

export default setAuthHeader;

import axios from "axios";

//Local imports
import setAuthHeader from "../../utils/setAuthHeader";
import { LOGIN, LOGOUT, CLEAR_AUTH_ERRORS, AUTH_ERROR, LOAD_USER, CLEAR_ERROR } from "../types";

//login user
export const logIn = async (dispatch, body) => {
    try {
        const res = await axios.post("/auth/login", body);
        dispatch({ type: LOGIN, payload: res.data.token })
        loadUser()
    } catch (err) {
        // console.log(err.response)
        dispatch({ type: AUTH_ERROR, payload: err.response.data.msg })
        setTimeout(() => {
            dispatch({ type: CLEAR_ERROR });
        }, 5000);
    }
};

//load user
export const loadUser = async (dispatch) => {
    try {
        if (localStorage.token) setAuthHeader(localStorage.token);
        const res = await axios.get("auth/me");
        dispatch({ type: LOAD_USER, payload: res.data.data });
    } catch (err) {
        console.log(err)
        dispatch({ type: AUTH_ERROR, payload: err.response.data.msg });
    }
};

//logout user
export const logout = (dispatch) => { 
    dispatch({ type: LOGOUT });
};

//clear auth errors
export const clearErrors = (dispatch) => {
    dispatch({type: CLEAR_AUTH_ERRORS})
}
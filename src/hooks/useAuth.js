import { useContext } from "react";
import AuthContext from "../context/auth/authContext";

function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;
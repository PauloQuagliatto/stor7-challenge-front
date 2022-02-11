import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = (accessToken) => {
    localStorage.setItem("access-token", accessToken);
    setAuth(true);
    navigate("/dashboard");
  };

  const getAccessToken = () => {
    const accessToken = localStorage.getItem("access-token");

    return accessToken;
  };
  const signOut = () => {
    localStorage.removeItem("access-token");
    setAuth(false);
    navigate("/");
  };
  return { auth, signIn, getAccessToken, signOut };
};

export default useAuth;

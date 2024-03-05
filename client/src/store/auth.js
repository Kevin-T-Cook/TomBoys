import axios from "axios";

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

const registerUser = (user) => ({
    type: REGISTER_USER,
    payload: user,
  });
  
  const loginUser = (token) => ({
    type: LOGIN_USER,
    payload: token,
  });
  
  const logoutUser = (user) => ({
    type: LOGOUT_USER,
    payload: user,
  });

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    }
    return null;
  };

  
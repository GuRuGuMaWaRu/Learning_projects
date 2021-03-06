import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../types";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      } else {
        throw new Error("No valid token");
      }

      const { data: user } = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: user });
    } catch (err) {
      console.log("Error:", err.message);
      dispatch({ type: AUTH_ERROR, payload: "Authorization error" });
    }
  };

  // Register User
  const registerUser = async user => {
    // const config = {
    //   headers: { "Content-Type": "application/json" }
    // };

    try {
      const res = await axios.post("/api/user", user);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      console.error("Error:", err.response.data.msg);
      dispatch({ type: REGISTER_FAIL });
    }
  };

  // Login User
  const loginUser = async user => {
    // const config = {
    //   headers: { "Content-Type": "application/json" }
    // };

    try {
      const res = await axios.post("/api/auth", user);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      console.error("Error:", err.response.data.msg);
      dispatch({ type: LOGIN_FAIL });
    }
  };

  // Logout User
  const logoutUser = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        loadUser,
        registerUser,
        loginUser,
        logoutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const ProtectedPage = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Component {...props} />;
};

export default ProtectedPage;

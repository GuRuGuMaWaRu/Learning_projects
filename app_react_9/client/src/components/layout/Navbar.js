import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthContext from "../../context/auth/authContext";

const StyledHeader = styled.div`
  color: #fff;
  background-color: palevioletred;
`;

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading, logoutUser } = authContext;

  const privateLinks = (
    <Fragment>
      <Link to="/">Home</Link>
      <a href="#!" onClick={() => logoutUser()}>
        Logout
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Fragment>
  );

  return (
    <StyledHeader>
      {isAuthenticated && !loading ? privateLinks : guestLinks}
    </StyledHeader>
  );
};

export default Navbar;

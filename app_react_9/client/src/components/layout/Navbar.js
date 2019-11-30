import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  color: #fff;
  background-color: palevioletred;
`;

const Navbar = () => {
  return (
    <StyledHeader>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </StyledHeader>
  );
};

export default Navbar;

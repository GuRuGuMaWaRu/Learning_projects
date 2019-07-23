import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  flex-grow: 1;
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
  padding: 0.5rem;

  &.active {
    background-color: #84163b;
  }
`;

const NavbarLink = ({ name, link }) => {
  return (
    <StyledNavLink exact to={link}>
      {name}
    </StyledNavLink>
  );
};

export default NavbarLink;

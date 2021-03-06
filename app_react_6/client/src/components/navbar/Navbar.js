import React from "react";
import styled from "styled-components/macro";
import { NavbarLink } from "./";

const StyledHeader = styled.header`
  color: #f2f2f2;
  padding: 1rem 0 0;
  border-top: 20px solid #ba2d65;
  background-color: #f06292;
`;

const StyledAppName = styled.h1`
  text-align: center;
  margin-top: 0;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const Navbar = () => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Create", link: "/create" }
  ].map(({ name, link }) => <NavbarLink key={name} name={name} link={link} />);

  return (
    <StyledHeader>
      <StyledAppName>React App 6</StyledAppName>
      <StyledNavbar>{navlinks}</StyledNavbar>
    </StyledHeader>
  );
};

export default Navbar;

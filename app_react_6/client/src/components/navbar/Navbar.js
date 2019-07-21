import React from "react";
import styled from "styled-components/macro";
import { NavbarLink } from "./";

const StyleHeader = styled.header`
  color: #f2f2f2;
  padding: 1rem;
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
    { name: "List", link: "/list" },
    { name: "Create", link: "/create" },
    { name: "Update", link: "/update" }
  ].map(({ name, link }) => <NavbarLink key={name} name={name} link={link} />);

  return (
    <StyleHeader>
      <StyledAppName>React App 6</StyledAppName>
      <StyledNavbar>{navlinks}</StyledNavbar>
    </StyleHeader>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ name, link }) => {
  return <NavLink to={link}>{name}</NavLink>;
};

export default NavbarLink;

import React from "react";
import { NavbarLink } from "./";

const Navbar = () => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "List", link: "/list" },
    { name: "Create", link: "/create" },
    { name: "Update", link: "/update" }
  ].map(({ name, link }) => <NavbarLink key={name} name={name} link={link} />);

  return (
    <header>
      <nav>{navlinks}</nav>
    </header>
  );
};

export default Navbar;

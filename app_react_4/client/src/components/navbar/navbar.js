import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarLink from "../navbar-link/navbar-link";

const Navbar = ({ navLinks }) => {
  const composeNavbarLinks = navLinks.map(navLink => {
    return <NavbarLink key={navLink.path} linkData={navLink} />;
  });

  return (
    <AppBar position="static">
      <Toolbar>{composeNavbarLinks}</Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  navlinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  )
};

export default Navbar;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: "inherit",
    textDecoration: "none",
    padding: "0 2rem",
    "&:nth-of-type(1)": {
      paddingLeft: "0"
    }
  }
}));

const NavbarLink = ({ linkData }) => {
  const classes = useStyles();

  return (
    <Button color="inherit">
      <Link className={classes.menuButton} to={linkData.path}>
        {linkData.name}
      </Link>
    </Button>
  );
};

NavbarLink.propTypes = {
  linkData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })
};

export default NavbarLink;

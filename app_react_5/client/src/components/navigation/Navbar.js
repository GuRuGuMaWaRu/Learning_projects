import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  menuButtonOuter: {
    "& + &": {
      marginLeft: "2rem"
    }
  },
  menuButton: {
    color: "inherit",
    textDecoration: "none"
  },
  menuButtonSelected: {
    color: "tomato"
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.menuButtonOuter} variant="button">
          <NavLink
            className={classes.menuButton}
            activeClassName={classes.menuButtonSelected}
            exact
            to="/"
          >
            Home
          </NavLink>
        </Typography>
        <Typography className={classes.menuButtonOuter} variant="button">
          <NavLink
            className={classes.menuButton}
            activeClassName={classes.menuButtonSelected}
            to="/create"
          >
            Add Cafe
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

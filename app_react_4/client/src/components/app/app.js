import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Journal from "../journal/journal";
import CreateEntry from "../create-entry/create-entry";
import ViewEntry from "../view-entry/view-entry";
import EditEntry from "../edit-entry/edit-entry";

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

function App() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">
              <Link className={classes.menuButton} to="/">
                Journal
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.menuButton} to="/create">
                Add Entry
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.menuButton} to="/view">
                View Entry
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.menuButton} to="/edit">
                Edit Entry
              </Link>
            </Button>
          </Toolbar>
        </AppBar>

        <Route path="/" exact component={Journal} />
        <Route path="/create" component={CreateEntry} />
        <Route path="/view" component={ViewEntry} />
        <Route path="/edit" component={EditEntry} />
      </Router>
    </div>
  );
}

export default App;

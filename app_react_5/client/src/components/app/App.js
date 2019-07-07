import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Navbar } from "../navigation";

const useStyles = makeStyles({
  main: {
    marginTop: "104px"
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Container className={classes.main} maxWidth="sm">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <div>List of all cafes</div>}
              />
              <Route
                path="/create"
                render={() => <div>Form to create a new cafe</div>}
              />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </Container>
        </main>
      </Router>
    </>
  );
};

export default App;

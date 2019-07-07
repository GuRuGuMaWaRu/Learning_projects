import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Navbar } from "../navigation";
import { CafeForm } from "../cafeForm";

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
              <Route path="/create" component={CafeForm} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </Container>
        </main>
      </Router>
    </>
  );
};

export default App;

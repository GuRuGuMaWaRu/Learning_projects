import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/list" render={() => <div>List</div>} />
        <Route exact path="/create" render={() => <div>Create</div>} />
        <Route exact path="/update" render={() => <div>Update</div>} />
        <Route render={() => <div>404. Not Found.</div>} />
      </Switch>
    </Router>
  );
};

export default App;

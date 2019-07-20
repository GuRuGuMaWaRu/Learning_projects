import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/update">Update</NavLink>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact path="/list" render={() => <div>List</div>} />
      <Route exact path="/create" render={() => <div>Create</div>} />
      <Route exact path="/update" render={() => <div>Update</div>} />
      <Route render={() => <div>404. Not Found.</div>} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

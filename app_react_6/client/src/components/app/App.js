import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const App = () => {
  return (
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
    </Router>
  );
};

export default App;

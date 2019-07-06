import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/create">Add Cafe</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" render={() => <div>List of all cafes</div>} />
          <Route
            path="/create"
            render={() => <div>Form to create a new cafe</div>}
          />
          <Route render={() => <div>Not Found</div>} />
        </main>
      </Router>
    </>
  );
};

export default App;

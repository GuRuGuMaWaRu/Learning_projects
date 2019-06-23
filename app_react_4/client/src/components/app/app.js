import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Journal from "../journal/journal";
import CreateEntry from "../create-entry/create-entry";
import ViewEntry from "../view-entry/view-entry";
import EditEntry from "../edit-entry/edit-entry";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Journal</Link>
            </li>
            <li>
              <Link to="/create">Add Entry</Link>
            </li>
            <li>
              <Link to="/view">View Entry</Link>
            </li>
            <li>
              <Link to="/edit">Edit Entry</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Journal} />
        <Route path="/create" component={CreateEntry} />
        <Route path="/view" component={ViewEntry} />
        <Route path="/edit" component={EditEntry} />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "../navigation";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
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

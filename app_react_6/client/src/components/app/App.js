import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { Navbar } from "../navbar";

const StyledMain = styled.main`
  width: 80%;
  margin: 2rem auto;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <StyledMain>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/list" render={() => <div>List</div>} />
          <Route exact path="/create" render={() => <div>Create</div>} />
          <Route exact path="/update" render={() => <div>Update</div>} />
          <Route render={() => <div>404. Not Found.</div>} />
        </Switch>
      </StyledMain>
    </Router>
  );
};

export default App;

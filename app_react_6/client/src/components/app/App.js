import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { Navbar } from "../navbar";
import { BlogForm } from "../form";
import { Home } from "../home";
import { BlogpostDetails } from "../blogpost-details";

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
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={BlogForm} />
          <Route exact path="/update/:id" component={BlogForm} />
          <Route path="/:id" component={BlogpostDetails} />
          <Route render={() => <div>404. Not Found.</div>} />
        </Switch>
      </StyledMain>
    </Router>
  );
};

export default App;

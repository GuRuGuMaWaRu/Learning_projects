import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../navbar/navbar.container";
import Journal from "../journal/journal.container";
import CreateEntry from "../create-entry/create-entry.container";
import EditEntry from "../edit-entry/edit-entry";
import Entry from "../entry/entry.container";

import configureStore, { sagaMiddleware } from "../../configureStore";
import rootSaga from "../../sagas";

const store = configureStore();

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Route path="/" exact component={Journal} />
        <Route path="/create" component={CreateEntry} />
        <Route path="/edit" component={EditEntry} />
        <Route path="/entry" component={Entry} />
      </Router>
    </Provider>
  );
}

export default App;

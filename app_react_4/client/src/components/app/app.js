import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../navbar/navbar.container";
import Journal from "../journal/journal";
import CreateEntry from "../create-entry/create-entry.container";
import ViewEntry from "../view-entry/view-entry";
import EditEntry from "../edit-entry/edit-entry";

import configureStore, { sagaMiddleware } from "../../configureStore";

import { createEntrySaga } from "../../sagas";

const store = configureStore();

sagaMiddleware.run(createEntrySaga);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Route path="/" exact component={Journal} />
        <Route path="/create" component={CreateEntry} />
        <Route path="/view" component={ViewEntry} />
        <Route path="/edit" component={EditEntry} />
      </Router>
    </Provider>
  );
}

export default App;

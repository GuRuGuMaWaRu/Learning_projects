import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import "./index.css";
import App from "./components/app/app";
import Shopping from "./components/pages/shopping/shopping";
import CreateShop from "./components/pages/create-shop/create-shop";
import EditShop from "./components/pages/edit-shop/edit-shop";
import Cart from "./components/pages/cart/cart";
import configureStore, { history } from "./configureStore";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" render={Shopping} />
        <Route exact path="/createstore" render={CreateShop} />
        <Route exact path="/editstore" render={EditShop} />
        <Route exact path="/cart" render={Cart} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

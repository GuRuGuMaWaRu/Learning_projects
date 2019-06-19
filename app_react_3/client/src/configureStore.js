import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore() {
  return createStore(
    reducers(history),
    compose(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(sagaMiddleware),
      typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

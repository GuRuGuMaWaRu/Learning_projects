import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  return createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

export const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};

export default configureStore;

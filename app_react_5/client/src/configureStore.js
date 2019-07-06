import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";

const configureStore = () => {
  return createStore(
    reducers,
    compose(
      typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};

export default configureStore;

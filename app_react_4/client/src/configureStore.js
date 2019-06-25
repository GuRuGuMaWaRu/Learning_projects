import { createStore, compose } from "redux";

import reducers from "./reducers";

export default function configureStore() {
  return createStore(
    reducers,
    compose(
      typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

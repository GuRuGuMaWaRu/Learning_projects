import React from "react";
import classNames from "classnames";
import Navigation from "../navigation/navigation.container";
import styles from "./app.css";

const App = ({ children }) => {
  const appStyles = classNames("container", styles.container);

  return (
    <div>
      <Navigation />
      <div className={appStyles}>{children}</div>
    </div>
  );
};

export default App;

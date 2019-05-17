import React from "react";
import Navigation from "../navigation/navigation.container";

const App = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default App;

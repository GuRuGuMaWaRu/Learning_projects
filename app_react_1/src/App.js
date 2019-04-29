import React from "react";
import "./App.css";
import CheckboxContainer from "./CheckboxContainer";

function App() {
  const items = {
    main: ["venison", "fish", "chicken"],
    side1: ["potatoes", "rice", "buckwheat"],
    side2: ["greek salad", "caesar salad", "leek salad"]
  };

  return (
    <div class="App">
      <h1>Choose your own meal:</h1>
      <p>You've chosen the following meal: </p>
      <div className="main">
        <CheckboxContainer dishType="Main" items={items.main} />
        <CheckboxContainer dishType="Side 1" items={items.side1} />
        <CheckboxContainer dishType="Side 2" items={items.side2} />
      </div>
    </div>
  );
}

export default App;

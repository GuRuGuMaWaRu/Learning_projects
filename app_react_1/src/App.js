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
    <>
      <CheckboxContainer items={items.main} />
      <CheckboxContainer items={items.side1} />
      <CheckboxContainer items={items.side2} />
    </>
  );
}

export default App;

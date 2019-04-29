import React, { Component } from "react";
import "./App.css";
import CheckboxContainer from "./CheckboxContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: null,
      side1: null,
      side2: null
    };
  }

  handleSelect = (dishType, item) => {
    this.setState({
      [dishType]: item
    });
  };

  render() {
    const items = {
      main: ["venison", "fish", "chicken"],
      side1: ["potatoes", "rice", "buckwheat"],
      side2: ["greek salad", "caesar salad", "leek salad"]
    };
    const { main, side1, side2 } = this.state;
    const selectedMeal =
      main && side1 && side2 ? ` ${main} with ${side1} and ${side2}` : "";

    return (
      <div className="App">
        <h1>Choose your own meal:</h1>
        <p>
          You've chosen the following meal:
          <strong>{selectedMeal}</strong>
        </p>
        <div className="main">
          <CheckboxContainer
            dishType="Main"
            selected={main}
            items={items.main}
            onSelect={item => this.handleSelect("main", item)}
          />
          <CheckboxContainer
            dishType="Side 1"
            selected={side1}
            items={items.side1}
            onSelect={item => this.handleSelect("side1", item)}
          />
          <CheckboxContainer
            dishType="Side 2"
            selected={side2}
            items={items.side2}
            onSelect={item => this.handleSelect("side2", item)}
          />
        </div>
      </div>
    );
  }
}

export default App;

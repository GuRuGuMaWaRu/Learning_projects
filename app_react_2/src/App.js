import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import "./App.css";
import { brands } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: brands
    };
  }

  render() {
    const { brands } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="main-area">
          <Sidebar brands={brands} />
          <ProductList />
        </div>
      </div>
    );
  }
}

export default App;

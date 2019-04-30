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
      brands: brands,
      selected: 0
    };
  }

  selectBrand = id => {
    console.log("object");
    this.setState({
      selected: id
    });
  };

  render() {
    const { brands, selected } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="main-area">
          <Sidebar
            brands={brands}
            selected={selected}
            selectBrand={this.selectBrand}
          />
          <ProductList />
        </div>
      </div>
    );
  }
}

export default App;

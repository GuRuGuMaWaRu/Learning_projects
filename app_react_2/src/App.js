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
    return (
      <div className="App">
        <Header />
        <div className="main-area">
          <Sidebar />
          <ProductList />
        </div>
      </div>
    );
  }
}

export default App;

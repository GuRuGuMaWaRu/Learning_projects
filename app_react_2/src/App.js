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
      selected: 0,
      inCart: []
    };
  }

  selectBrand = id => {
    this.setState({
      selected: id
    });
  };

  addToCart = price => {
    this.setState(prevState => ({
      inCart: [...prevState.inCart, price]
    }));
  };

  clearCart = () => {
    this.setState({
      inCart: []
    });
  };

  render() {
    const { brands, selected, inCart } = this.state;
    const selectedBrand = brands.filter(brand => brand.id === selected)[0];

    return (
      <div className="App">
        <Header inCart={inCart} clearCart={this.clearCart} />
        <div className="main-area">
          <Sidebar
            brands={brands}
            selected={selected}
            selectBrand={this.selectBrand}
          />
          <ProductList
            products={selectedBrand.products}
            addToCart={this.addToCart}
          />
        </div>
      </div>
    );
  }
}

export default App;

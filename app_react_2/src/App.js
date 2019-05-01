import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import "./App.css";
import { brands } from "./data";
import { CurrencyContext } from "./context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCurrency = () => {
      this.setState(prevState => ({
        currency:
          prevState.currency === "Redanian Orens"
            ? "Temerian Crowns"
            : "Redanian Orens"
      }));
    };

    this.state = {
      brands: brands,
      selected: 0,
      inCart: [],
      currency: "Redanian Orens",
      toggleCurrency: this.toggleCurrency
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
    const { brands, selected, inCart, currency, toggleCurrency } = this.state;
    const selectedBrand = brands.filter(brand => brand.id === selected)[0];

    return (
      <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
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
      </CurrencyContext.Provider>
    );
  }
}

export default App;

import React from "react";
import Cart from "../Cart";
import CurrencySelector from "../CurrencySelector";
import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Delux Adventure</h1>
      <Cart />
      <CurrencySelector />
    </div>
  );
};

export default Header;

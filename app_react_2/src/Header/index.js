import React from "react";
import Cart from "../Cart";
import CurrencySelector from "../CurrencySelector";
import "./index.css";

const Header = ({ inCart, clearCart }) => {
  const totalItems = inCart.length;
  const totalPrice = inCart.reduce((total, price) => total + price, 0);

  return (
    <div className="Header">
      <h1>Delux Adventure</h1>
      <Cart
        totalItems={totalItems}
        totalPrice={totalPrice}
        clearCart={clearCart}
      />
      <CurrencySelector />
    </div>
  );
};

export default Header;

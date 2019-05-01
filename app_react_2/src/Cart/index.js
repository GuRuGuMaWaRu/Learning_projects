import React from "react";
import "./index.css";
import { CurrencyContext } from "../context";
import { calculatePrice } from "../currency";

const Cart = ({ totalItems, totalPrice, clearCart }) => {
  return (
    <CurrencyContext.Consumer>
      {({ currency }) => (
        <div className="Cart">
          <div>Selected:{totalItems}</div>
          <div>Total: {calculatePrice(totalPrice, currency)}</div>
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      )}
    </CurrencyContext.Consumer>
  );
};

export default Cart;

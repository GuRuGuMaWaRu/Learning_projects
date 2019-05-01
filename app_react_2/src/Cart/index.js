import React from "react";
import "./index.css";

const Cart = ({ totalItems, totalPrice, clearCart }) => {
  return (
    <div className="Cart">
      <div>Selected:{totalItems}</div>
      <div>Total: {totalPrice}</div>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

export default Cart;

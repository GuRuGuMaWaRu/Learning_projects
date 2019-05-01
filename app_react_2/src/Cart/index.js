import React from "react";
import "./index.css";

const Cart = ({ totalItems, totalPrice }) => {
  return (
    <div className="Cart">
      <div>Selected:{totalItems}</div>
      <div>Total: {totalPrice}</div>
      <button>Clear Cart</button>
    </div>
  );
};

export default Cart;

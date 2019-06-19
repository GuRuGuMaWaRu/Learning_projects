import React from "react";
import PropTypes from "prop-types";
import "./cart-section.css";

const CartSection = ({
  items,
  currency,
  changeCartItemQty,
  deleteCartItem,
  clearCart
}) => {
  const currencyModifier = currency.rf ? 1.15 : 1;
  const totalPrice =
    items.length < 1
      ? 0
      : items.reduce((total, item) => total + item.itemPrice * item.qty, 0);

  const itemList = items.map(item => (
    <div className="cart-listing" key={item.itemId}>
      <span className="cart-listing-name">{item.itemName}</span>
      <span className="cart-listing-price">
        {Math.round(item.itemPrice * currencyModifier)} /{" "}
        {Math.round(item.itemPrice * item.qty * currencyModifier)}
      </span>
      <span className="cart-listing-qty">
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            changeCartItemQty({
              cartItemId: item.itemId,
              changeType: "decrease"
            })
          }
        >
          -
        </button>
        {item.qty}
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            changeCartItemQty({
              cartItemId: item.itemId,
              changeType: "increase"
            })
          }
        >
          +
        </button>
      </span>
      <button
        className="cart-listing-remove btn btn-outline-secondary"
        onClick={() => deleteCartItem(item.itemId)}
      >
        X
      </button>
    </div>
  ));

  return (
    <>
      {itemList}
      <div className="cart-total">
        <span>TOTAL: {Math.round(totalPrice * currencyModifier)}</span>
        <button className="btn btn-danger" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </>
  );
};

CartSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.shape({
    rf: PropTypes.bool.isRequired,
    tc: PropTypes.bool.isRequired
  }),
  changeCartItemQty: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired
};

export default CartSection;

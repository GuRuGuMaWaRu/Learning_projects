import React from "react";
import PropTypes from "prop-types";
import "./cart-section.css";

export default class CartSection extends React.Component {
  componentDidUpdate(prevProps) {}

  render() {
    const { items } = this.props;

    const totalPrice =
      items.length < 1
        ? 0
        : items.reduce((total, item) => total + item.itemPrice * item.qty, 0);

    const itemList = items.map(item => (
      <div className="cart-listing" key={item.itemId}>
        <span className="cart-listing-name">{item.itemName}</span>
        <span className="cart-listing-price">
          {item.itemPrice} / {item.itemPrice * item.qty}
        </span>
        <span className="cart-listing-qty">
          <button className="btn btn-outline-primary">-</button>
          {item.qty}
          <button className="btn btn-outline-primary">+</button>
        </span>
        <button className="cart-listing-remove btn btn-outline-secondary">
          X
        </button>
      </div>
    ));

    return (
      <>
        {itemList}
        <div className="cart-total">
          <span>TOTAL: {totalPrice}</span>
          <button className="btn btn-danger">Clear Cart</button>
        </div>
      </>
    );
  }
}

CartSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

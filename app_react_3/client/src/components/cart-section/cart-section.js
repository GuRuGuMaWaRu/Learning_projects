import React from "react";
import PropTypes from "prop-types";
import "./cart-section.css";

export default class CartSection extends React.Component {
  render() {
    const { items } = this.props;
    const itemList = items.map(item => (
      <div className="cart-listing" key={item.itemId}>
        <span className="cart-listing-name">{item.itemName}</span>
        <span className="cart-listing-price">{item.itemPrice}</span>
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
    return <div>{itemList}</div>;
  }
}

CartSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

import React from "react";
import PropTypes from "prop-types";

export default class CartSection extends React.Component {
  render() {
    const { items } = this.props;
    const itemList = items.map(item => (
      <div key={item.itemId}>
        {item.itemName} - {item.itemPrice} - Qty: {item.qty}
      </div>
    ));
    return <div>{itemList}</div>;
  }
}

CartSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

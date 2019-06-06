import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../navigation-item/navigation-item";
import "./navigation.css";

class Navigation extends React.Component {
  componentDidMount() {
    this.props.loadCartItems();
  }

  createLinks = () => {
    const { pages, navigate, currentPath } = this.props;

    return pages.map(({ path, title }) => (
      <NavigationItem
        key={path}
        path={path}
        onClick={navigate}
        isCurrent={path === currentPath}
      >
        {title}
      </NavigationItem>
    ));
  };

  render() {
    const { cart } = this.props;
    const totalItems = cart.items.reduce((total, item) => total + 1, 0);
    const totalPrice = cart.items.reduce(
      (total, item) => total + item.itemPrice,
      0
    );

    return (
      <nav className="navbar">
        <ul className="nav nav-tabs mr-auto">{this.createLinks()}</ul>
        <div className="cart-items">CART ITEMS: {totalItems}</div>
        <div className="cart-total-cost">CART TOTAL COST: {totalPrice}</div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  navigate: PropTypes.func.isRequired,
  loadCartItems: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        itemId: PropTypes.string.isRequired,
        itemPrice: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired
      })
    )
  })
};

export default Navigation;

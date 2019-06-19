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
    const { cart, changeCurrency, currency } = this.props;
    const currencyModifier = currency.rf ? 1.15 : 1;
    const totalItems = cart.items.reduce((total, item) => total + item.qty, 0);
    const totalPrice = cart.items.reduce(
      (total, item) => total + item.qty * item.itemPrice,
      0
    );

    return (
      <nav className="navbar">
        <ul className="nav nav-tabs mr-auto">{this.createLinks()}</ul>
        <div className="cart-items">CART ITEMS: {totalItems}</div>
        <div className="cart-total-cost">
          CART TOTAL COST: {Math.round(totalPrice * currencyModifier)}
        </div>
        <div
          className={`currency ${currency.rf ? "selected" : ""}`}
          onClick={() => changeCurrency("rf")}
        >
          Redanian Florins
        </div>
        <div
          className={`currency ${currency.tc ? "selected" : ""}`}
          onClick={() => changeCurrency("tc")}
        >
          Temerian Crowns
        </div>
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
        itemName: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired
      })
    )
  }),
  currency: PropTypes.shape({
    rf: PropTypes.bool.isRequired,
    tc: PropTypes.bool.isRequired
  }),
  changeCurrency: PropTypes.func.isRequired
};

export default Navigation;

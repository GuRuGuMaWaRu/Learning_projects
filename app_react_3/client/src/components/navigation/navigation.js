import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../navigation-item/navigation-item";
import "./navigation.css";

const Navigation = ({ navigate, pages, currentPath, cart }) => {
  const links = pages.map(({ path, title }) => (
    <NavigationItem
      key={path}
      path={path}
      onClick={navigate}
      isCurrent={path === currentPath}
    >
      {title}
    </NavigationItem>
  ));

  return (
    <nav className="navbar">
      <ul className="nav nav-tabs mr-auto">{links}</ul>
      <div className="cart-items">CART ITEMS: {cart.totalItems}</div>
      <div className="cart-total-cost">CART TOTAL COST: {cart.totalCost}</div>
    </nav>
  );
};

Navigation.propTypes = {
  navigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
  cart: PropTypes.shape({
    totalItems: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired
  })
};

export default Navigation;

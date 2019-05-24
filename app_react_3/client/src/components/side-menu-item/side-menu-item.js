import React from "react";
import PropTypes from "prop-types";
import "./side-menu-item.css";

const SideMenuItem = ({ shopName, onSelectShop }) => {
  return (
    <div className="side-menu-item" onClick={onSelectShop}>
      {shopName}
    </div>
  );
};

SideMenuItem.propTypes = {
  shopName: PropTypes.string.isRequired,
  onSelectShop: PropTypes.func.isRequired
};

export default SideMenuItem;

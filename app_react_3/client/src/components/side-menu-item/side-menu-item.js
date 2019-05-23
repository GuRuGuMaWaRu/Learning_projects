import React from "react";
import PropTypes from "prop-types";

const SideMenuItem = ({ shopName, onSelectShop }) => {
  return <div onClick={onSelectShop}>{shopName}</div>;
};

SideMenuItem.propTypes = {
  shopName: PropTypes.string.isRequired,
  onSelectShop: PropTypes.func.isRequired
};

export default SideMenuItem;

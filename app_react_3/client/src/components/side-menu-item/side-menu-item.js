import React from "react";
import PropTypes from "prop-types";

const SideMenuItem = ({ shopName }) => {
  return <div>{shopName}</div>;
};

SideMenuItem.propTypes = {
  shopName: PropTypes.string.isRequired
};

export default SideMenuItem;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./side-menu-item.css";

const SideMenuItem = ({ shopName, highlighted, onSelectShop }) => {
  const styles = classNames("side-menu-item", {
    highlighted: highlighted
  });
  return (
    <div className={styles} onClick={onSelectShop}>
      {shopName}
    </div>
  );
};

SideMenuItem.propTypes = {
  shopName: PropTypes.string.isRequired,
  onSelectShop: PropTypes.func.isRequired
};

export default SideMenuItem;

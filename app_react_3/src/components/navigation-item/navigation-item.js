import React from "react";
import PropTypes from "prop-types";
import styles from "./navigation-item.css";

const NavigationItem = ({ path, onClick, isCurrent, children }) => {
  return (
    <a
      className={styles.link}
      href={path}
      onClick={e => {
        e.preventDefault();
        onClick(path);
      }}
    >
      {children}
    </a>
  );
};

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

export default NavigationItem;

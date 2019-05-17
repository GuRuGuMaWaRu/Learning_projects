import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// import styles from "./navigation-item.css";

const NavigationItem = ({ path, onClick, isCurrent, children }) => {
  const linkStyles = classnames("nav-link", {
    active: isCurrent
  });

  return (
    <li className="nav-item">
      <a
        className={linkStyles}
        href={path}
        onClick={e => {
          e.preventDefault();
          onClick(path);
        }}
      >
        {children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

export default NavigationItem;

import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../navigation-item/navigation-item";

const Navigation = ({ navigate, pages, currentPath }) => {
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

  return <ul className="nav nav-tabs">{links}</ul>;
};

Navigation.propTypes = {
  navigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired
};

export default Navigation;

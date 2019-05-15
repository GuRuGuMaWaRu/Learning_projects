import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../navigation-item/navigation-item";

const Navigation = ({ pages, currentPath }) => {
  console.log(pages);
  return <div>Navigation</div>;
};

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired
};

export default Navigation;

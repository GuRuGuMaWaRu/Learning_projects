import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = ({ item, selected, onSelect }) => {
  const selectedClass = selected ? "checkbox-selected" : "";

  return (
    <div className={`checkbox ${selectedClass}`} onClick={onSelect}>
      <input type="checkbox" />
      <label>{item}</label>
    </div>
  );
};

Checkbox.propTypes = {
  item: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default Checkbox;

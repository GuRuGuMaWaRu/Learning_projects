import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import "./CheckboxContainer.css";

const CheckboxContainer = ({ dishType, selected, items, onSelect }) => {
  const setupCheckboxes = () => {
    return items.map((item, index) => (
      <Checkbox
        key={index}
        item={item}
        selected={item === selected ? true : false}
        onSelect={() => onSelect(item)}
      />
    ));
  };

  return (
    <div className="checkbox-container">
      <h4>{dishType}</h4>
      {setupCheckboxes()}
    </div>
  );
};

CheckboxContainer.propTypes = {
  dishType: PropTypes.string.isRequired,
  selected: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CheckboxContainer;

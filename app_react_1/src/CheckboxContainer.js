import React, { Component } from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import "./CheckboxContainer.css";

export default class CheckboxContainer extends Component {
  setupCheckboxes = () => {
    return this.props.items.map((item, index) => (
      <Checkbox key={index} item={item} />
    ));
  };

  render() {
    return (
      <div className="checkbox-container">
        <h4>{this.props.dishType}</h4>
        {this.setupCheckboxes()}
      </div>
    );
  }
}

CheckboxContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  dishType: PropTypes.string.isRequired
};

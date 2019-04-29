import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

export default class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox">
        <input type="checkbox" />
        <label>{this.props.item}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  item: PropTypes.string.isRequired
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = e => {
    this.setState(state => ({
      selected: !state.selected
    }));
  };

  render() {
    const selected = this.state.selected ? "checkbox-selected" : "";

    return (
      <div className={`checkbox ${selected}`} onClick={this.handleClick}>
        <input type="checkbox" />
        <label>{this.props.item}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  item: PropTypes.string.isRequired
};

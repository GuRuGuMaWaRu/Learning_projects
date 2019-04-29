import React, { Component } from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

export default class CheckboxContainer extends Component {
  constructor(props) {
    super(props);
  }

  setupCheckboxes = () => {
    return this.props.items.map(item => <Checkbox item={item} />);
  };

  render() {
    return <>{this.setupCheckboxes()}</>;
  }
}

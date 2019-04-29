import React, { Component } from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

export default class CheckboxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </>
    );
  }
}

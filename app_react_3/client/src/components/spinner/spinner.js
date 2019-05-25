import React from "react";
import "./spinner.css";
import spinner from "../../images/ajax-loader.gif";

export default () => (
  <div className="spinner-container">
    <img src={spinner} alt="loading spinner" />
  </div>
);

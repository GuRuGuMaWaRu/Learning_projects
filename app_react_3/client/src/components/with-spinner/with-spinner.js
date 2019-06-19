import React from "react";
import Spinner from "../spinner/spinner";

const withSpinner = ({ isLoading, hasData, render }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!hasData) {
    return null;
  }

  return <div>{render()}</div>;
};

export default withSpinner;

import React from "react";
import Spinner from "../spinner/spinner";

const withSpinner = (WrappedComponent, isLoading, data) => {
  if (isLoading) {
    return <Spinner />;
  }

  return <WrappedComponent data={data} />;
};

export default withSpinner;

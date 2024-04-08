import React from "react";

const Column = ({ component: Component, props }) => {
  return <Component {...props} />;
};

export default Column;

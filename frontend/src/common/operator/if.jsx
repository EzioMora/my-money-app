import React from "react";

const If = (props) => {
  if (props.test) return props.children;
  if (!props.test) return false;
};

export default If;

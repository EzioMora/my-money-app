import React from "react";

const MenuItem = (props) => (
  <li>
    <a href={props.path}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </a>
  </li>
);

export default MenuItem;

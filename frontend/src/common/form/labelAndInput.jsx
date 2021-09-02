import React from "react";

import Grid from "../layout/grid";

const LabelAndInput = (props) => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>

      <input
        {...props.input}
        className="form-control"
        type={props.type}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
      />
    </div>
  </Grid>
);

export default LabelAndInput;

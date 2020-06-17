import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";

function FieldGroup({ label, ...props }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

export class FormInputs extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]} style={{
          "textAlign": "left",
          "fontSize": "12px",
          "marginBottom": "5px",
          "textTransform": "uppercase",
          "color": "#9a9a9a",
          "display": "inline-block",
          "maxWidth": "100%"
      }}
>
          <FieldGroup {...this.props.properties[i]} />
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;

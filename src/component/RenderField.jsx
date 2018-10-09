import React from "react";
import { Col, Label, FormGroup, Input } from "reactstrap";

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  if (touched && error) {
    return (
      <FormGroup row>
        <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
          <Input
            className="errorStyle"
            {...input}
            placeholder={label}
            type={type}
            
          />
          {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
      </FormGroup>
    );
  } else {
    return (
      <FormGroup row>
      <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
          <Input {...input} placeholder={label} type={type} />
        </Col>
      </FormGroup>
    );
  }
};

export default renderField;

import React from 'react'
import { Col, Label, FormGroup } from "reactstrap";
import NumberFormat from 'react-number-format'

export const renderNoHp = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <FormGroup row>
        <Label sm={2} md={12}>{label} {touched && error && <span className="errorStyle">{error}</span>}</Label>
          <Col sm={10} md={12}>
          <NumberFormat {...input} className="inputType" placeholder="+62" format="+62 (###) ####-####" mask="_"/>
          
          </Col>
        </FormGroup>
      );
}
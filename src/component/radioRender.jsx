import React, { Component } from 'react'
import { FormGroup, Label, Col } from "reactstrap";

export default class RadioGroup extends Component {
    render() {
        const { input, meta, options, label } = this.props
        const hasError = meta.touched && meta.error;

        return (
            <FormGroup row>
                <Label sm={2} md={12}>{label}</Label>
                <Col sm={10} md={12}>
                    {options.map(o => <label key={o.value} style={{ marginLeft: "10px" }}><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label>)}
                    {hasError && <span className="errorStyle" style={{ marginLeft: "10px" }}>{meta.error}</span>}
                </Col>
            </FormGroup>
        );
    }
}

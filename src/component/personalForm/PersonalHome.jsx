    import React, { Component } from "react";
    import { Field, reduxForm } from "redux-form";
    import { Container, Form, Button, Row, Col } from "reactstrap";
    import RenderField from "../RenderField";
    import validate from "./validate";
    // import radioRender from "../radioRender";
    import { Tinggal } from "../dropdownRender";
    import Dropzone from '../dropzone'
    // import {FileInput} from '../fileInputRender'

    class PersonalHome extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col>
                    <center>
                    <h3>BIODATA PENDAFTAR</h3>
                    </center>
                </Col>
                </Row>
                <Row>
                <Col md={6} xs={12}>
                <Field
                    name="ktp"
                    component={Dropzone}
                />
                <Field name="tinggal" component={Tinggal} label="Tinggal Di" />
                </Col>
                <Col md={6} xs={12}>
                <Field
                name="email"
                type="text"
                component={RenderField}
                label="Email Anda"
                />
                <Field
                name="noUser"
                type="text"
                component={RenderField}
                label="Nomor Hp/Wa"
                />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <center>
                    <Button color="success" type="submit" disabled={pristine || submitting} className="next">
                    SELANJUTNYA
                    </Button>
                </center>
                </Col>
            </Row>
            </Form>
        </Container>
        );
    }
    }

    export default reduxForm({
        form: "personal",
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        validate
    })(PersonalHome);

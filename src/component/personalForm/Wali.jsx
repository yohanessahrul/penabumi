import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Form, Button, Row, Col } from "reactstrap";
import RenderField from "../RenderField";
import validate from "./validate";
import radioRender from "../radioRender";
import { Agama, Tinggal } from "../dropdownRender";

class Wali extends Component {
  render() {
    const { handleSubmit,previousPage } = this.props;
    
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <center>
                  <h3>WALI PENDAFTAR</h3>
                </center>
              </Col>
            </Row>
            <Row>
            <Col md={6} xs={12}>
                <Field
                    name="namaWali"
                    type="text"
                    label="Nama Wali/Penanggung Jawab"
                    component={RenderField}
                />
                <Field
                    name="hubungan"
                    type="text"
                    label="Hubungan Wali/Penanggung Jawab"
                    component={RenderField}
                />
            </Col>
            <Col md={6} xs={12}>
                <Field
                    name="noWali"
                    type="text"
                    label="No/Wa Wali/Penanggung Jawab"
                    component={RenderField}
                />
                <Field
                    name="emailWali"
                    type="text"
                    label="Email Wali/Penanggung Jawab"
                    component={RenderField}
                />
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
              <Button color="success" type="submit"  className="previous spasiButton" onClick={previousPage}>
                  KEMBALI
                </Button>
                <Button color="success" type="submit"  className="next spasiButton">
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
})(Wali);

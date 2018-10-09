import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Form, Button, Row, Col } from "reactstrap";
import RenderField from "../RenderField";
import validate from "./validate";
import { connect } from "react-redux";
import { foundationFormAction } from "../../actions/institutionForm";
import { bindActionCreators } from "redux";

class InstitutionHome extends Component {
  submit = (values) => {
    this.props.foundationFormAction(values);
  };
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <Container>
        <Form
          onSubmit={handleSubmit(this.submit)}
          style={{ marginTop: "20px" }}
        >
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <center>
                    <h5>DATA YAYASAN</h5>
                  </center>
                </Col>
              </Row>
              <Field
                name="namaYayasan"
                type="text"
                component={RenderField}
                label="Nama Yayasan"
              />
              <Field
                name="alamatYayasan"
                type="text"
                component={RenderField}
                label="Alamat Yayasan"
              />
              <Field
                name="emailYayasan"
                type="text"
                component={RenderField}
                label="Email Yayasan"
              />
              <Field
                name="noYayasan"
                type="text"
                component={RenderField}
                label="Nomor Telpon/Wa Yayasan"
              />
              <Field
                name="website"
                type="text"
                component={RenderField}
                label="Website Yayasan"
              />
              <Field
                name="jenis"
                type="text"
                component={RenderField}
                label="Jenis Yayasan"
              />
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <center>
                    <h5>DATA PENDAFTAR</h5>
                  </center>
                </Col>
              </Row>
              <Field
                name="namaPendaftar"
                type="text"
                component={RenderField}
                label="Nama Lengkap Pendaftar"
              />
              <Field
                name="emailPendaftar"
                type="text"
                component={RenderField}
                label="Email Pendaftar"
              />
              <Field
                name="noPendaftar"
                type="text"
                component={RenderField}
                label="Nomor Telp/Wa Pendaftar"
              />
              <Field
                name="pic"
                type="text"
                component={RenderField}
                label="Pic Pendaftar"
              />
              <Field
                name="jabatan"
                type="text"
                component={RenderField}
                label="Jabatan Pendaftar"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
                <Button color="success" type="submit" disabled={pristine || submitting}>
                  Submit
                </Button>
              </center>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    daftarYayasan: state.foundationForm
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    foundationFormAction
  },dispatch);
};

InstitutionHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(InstitutionHome);
export default reduxForm({
  form: "foundation",
  validate
})(InstitutionHome);

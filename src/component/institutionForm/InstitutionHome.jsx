import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Form, Button, Row, Col } from "reactstrap";
import RenderField from "../RenderField";
import validate from "./validate";
import { connect } from "react-redux";
import { foundationFormAction } from "../../actions/institutionForm";
import { bindActionCreators } from "redux";
import {renderNoHp} from '../noHpRender'
class InstitutionHome extends Component {
  componentWillMount(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  submit = (values) => {
    this.props.foundationFormAction(values);
  }
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
                label="Nama"
              />
              <Field
                name="alamatYayasan"
                type="text"
                component={RenderField}
                label="Alamat"
              />
                <Field
                  name="noYayasan"
                  type="text"
                  component={renderNoHp}
                  label="Nomor Telpon/Wa Yayasan"
                />
              <Field
                name="emailYayasan"
                type="text"
                component={RenderField}
                label="Email"
              />
              <Field
                name="website"
                type="text"
                component={RenderField}
                label="Website"
              />
              <Field
                name="jenis"
                type="text"
                component={RenderField}
                label="Jenis"
              />
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <center>
                    <h5>DATA PIC</h5>
                  </center>
                </Col>
              </Row>
              <Field
                name="namaPendaftar"
                type="text"
                component={RenderField}
                label="Nama Lengkap"
              />
              <Field
                name="emailPendaftar"
                type="text"
                component={RenderField}
                label="Email"
              />
              <Field
                name="noPendaftar"
                type="text"
                component={renderNoHp}
                label="Nomor Telp/Wa"
              />
              <Field
                name="jabatan"
                type="text"
                component={RenderField}
                label="Jabatan"
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

import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Form, Button, Row, Col } from "reactstrap";
import RenderField from "../RenderField";
import validate from "./validate";
import {individualFormAction} from '../../actions/individualForm'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DropKarya from '../dropzoneKarya'
import DropIjazah from '../dropzoneIjazah'
class Pendidikan extends Component {


submit = (values) =>{
  this.props.individualFormAction(values)
}
  render() {
    const { handleSubmit,previousPage,pristine,submitting } = this.props;
    
    return (
      <Container>
        <Form onSubmit={handleSubmit(this.submit)}>
            <Row>
              <Col>
                <center>
                  <h3>PENDIDIKAN  PENDAFTAR</h3>
                </center>
              </Col>
            </Row>
            <Row>
            <Col md={6} xs={12}>
            <Field
                    name="formal"
                    type="text"
                    label="Pendidikan Formal Terakhir"
                    component={RenderField}
                />
            <Field
                    name="informal"
                    type="text"
                    label="Pendidikan Informal"
                    component={RenderField}
                />
                <Field
                    name="karya"
                    component={DropKarya}
                    label = "Upload Karya-Karya Anda Menggunakan .zip file"
                />
            </Col>
            <Col  md={6} xs={12}>
            <Field
                    name="bahasa"
                    type="text"
                    label="Menguasai Bahasa (sebutkan)"
                    component={RenderField}
                />
                <Field
                    name="ormas"
                    type="text"
                    label="Kegiatan Berorganisasi (sebutkan) "
                    component={RenderField}
                />
                <Field
                    name="ijazah"
                    component={DropIjazah}
                    label = "Upload Ijazah Terakhir Dan Sertifikat Pendidikan Informal (jika ada) Anda Menggunakan .zip file"
                />
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
              <Button color="success" type="submit"  className="previous spasiButton" onClick={previousPage}>
                  KEMBALI
                </Button>
                <Button color="info" type="submit" className="spasiButton" disabled={pristine || submitting}>
                  SELESAI
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
    daftarPersonal: state.individualForm
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    individualFormAction
  },dispatch);
};


Pendidikan = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pendidikan);

export default reduxForm({
    form: "personal",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Pendidikan);

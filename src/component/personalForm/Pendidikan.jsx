import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Form, Button, Row, Col } from "reactstrap";
import RenderField from "../RenderField";
import validate from "./validate";
import radioRender from "../radioRender";
import { Agama, Tinggal } from "../dropdownRender";
import {individualFormAction} from '../../actions/individualForm'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class Pendidikan extends Component {

submit = (values) =>{
  this.props.individualFormAction(values)
  }
  render() {
    const { handleSubmit,previousPage } = this.props;
    
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
            </Col>
            <Col  md={6} xs={12}>
            <Field
                    name="bahasa"
                    type="textarea"
                    label="Menguasai Bahasa (sebutkan)"
                    component={RenderField}
                />
                <Field
                    name="ormas"
                    type="text"
                    label="Kegiatan Berorganisasi (sebutkan) "
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
                <Button color="info" type="submit" className="spasiButton">
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

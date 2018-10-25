    import React, { Component } from "react";
    import { Field, reduxForm,formValueSelector } from "redux-form";
    import { Container, Form, Button, Row, Col } from "reactstrap";
    import RenderField from "../RenderField";
    import validate from "./validate";
    import radioRender from "../radioRender";
    import { Tinggal } from "../dropdownRender";
    import Dropzone from '../dropzone'
    import { connect } from 'react-redux'
    import {renderNoHp} from '../noHpRender'
    class PersonalHome extends Component {
    componentWillMount(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
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
                    label="Upload Foto KTP Anda Disini"
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
                component={renderNoHp}
                label="Nomor Hp/Wa"
                />
                <div style={{marginTop:"10px"}}>
                <label htmlFor="kendaraan" style={{marginRight:"10px"}}>Punya Kendaraan</label>
                <Field
                name="kendaraan"
                type="checkbox"
                component="input"
                />
                </div>
                {this.props.punyaKendaraan && (
            <Field
            name="jenisKendaraan"
            component={radioRender}
            options={[
                { title: "Motor", value: "Motor" },
                { title: "Mobil", value: "Mobil" },
            ]}
            label="Jenis Kendaraan"
            />
            )}
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

    PersonalHome = reduxForm({
        form: "personal",
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        validate
    })(PersonalHome)

    const selector = formValueSelector('personal')
    PersonalHome = connect(state=>{
        const punyaKendaraan = selector(state,'kendaraan')
        return{
            punyaKendaraan
        }
    })(PersonalHome)
    export default PersonalHome

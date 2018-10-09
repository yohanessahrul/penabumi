    import React, { Component } from "react";
    import { Field, reduxForm } from "redux-form";
    import { Container, Form, Button, Row, Col } from "reactstrap";
    import RenderField from "../RenderField";
    import validate from "./validate";
    import radioRender from "../radioRender";
    import { Agama, Tinggal } from "../dropdownRender";

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
                name="nama"
                type="text"
                component={RenderField}
                label="Nama Lengkap"
                />
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
                <Field
                name="tglLahir"
                type="date"
                component={RenderField}
                label="Tanggal Lahir"
                />
                <Field
                name="alamat"
                type="text"
                component={RenderField}
                label="Alamat Sekarang"
                />
                <Field
                name="alamatKtp"
                type="text"
                component={RenderField}
                label="Alamat Pada KTP"
                />
                <Field
                name="noKtp"
                type="text"
                component={RenderField}
                label="Nomor KTP"
                />
                
                </Col>
                <Col md={6} xs={12}>
                <Field
                    name="kawin"
                    type="text"
                    component={RenderField}
                    label="Status Perkawinan"
                />
                <Field
                component={radioRender}
                name="kelamin"
                required={true}
                options={[
                    { title: "Pria", value: "Pria" },
                    { title: "Wanita", value: "Wanita" }
                ]}
                label="Jenis Kelamin"
                />
                <Field name="agama" component={Agama} label="Agama" />
                <Field name="tinggal" component={Tinggal} label="Tinggal Di" />
                <Field
                name="kendaraan"
                type="text"
                component={RenderField}
                label="Jenis Kendaraan (jika ada)"
                />
                <Field
                name="sim"
                type="text"
                component={RenderField}
                label="Jenis Sim"
                />
                <Field
                name="kepemilikan"
                type="text"
                component={RenderField}
                label="Status Kepemilikan Kendaraan"
                />
                </Col>
            </Row>
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

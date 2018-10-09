import React, { Component } from 'react'
import { Container, Col, Row, Card, Button, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class DaftarHome extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="6" style={{ marginTop: "10px" }}>
                        <Card body>
                            <CardTitle>Pendaftaran Institusi</CardTitle>
                            <CardText>Mendaftarkan Intitusi Anda Sebagai Bagian Dari Penabumi</CardText>
                            <Link to="/institutional-register">
                                <Button color="success">Daftar Instansi</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col xs="12" md="6" style={{ marginTop: "10px" }}>
                        <Card body>
                            <CardTitle>Pendaftaran Pribadi</CardTitle>
                            <CardText>Mendaftarkan Diri Anda Untuk Menjadi Penerima Beasiswa Penabumi</CardText>
                            <Link to="personal-register">
                                <Button color="success">Daftar Personal</Button>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

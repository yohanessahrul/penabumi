import React, { Component } from 'react';
import Navigation from '../component/Navigation';
import Maps from '../component/Maps';
import FormContact from '../component/FormContact';
import {
  Container, Row, Col,
} from 'reactstrap';

import Footer from '../component/Footer';


class Kontak extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Maps/>
        <Container style={{ marginTop: '-50px' }}>
          <Row>
            <Col md="4" style={{ marginBottom: '-10px' }}>
              <div style={{ width: '100%', background: 'white', border: 'thin solid #efefef', boxShadow: '0 0 8px 1px #8F8F8F' }}>
                <Row>
                  <Col md="3" sm="3" xs="3">
                    <img alt="call" style={{ width: '100%', padding: '20px 5px 20px 20px' }} src={'../images/contact/call.png'}/>
                  </Col>
                  <Col md="9" sm="9" xs="9">
                    <h6 style={{ paddingTop: '10px', marginBottom: '0px', fontWeight: 'bold' }}>Kontak</h6>
                    <p style={{ fontSize: '13px', lineHeight: '1.5em', padding: '5px 0px' }}>
                      Sigit - 0812-2885-6699 (WA) <br/>
                      <br/>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="4" style={{ marginBottom: '-10px' }}>
              <div style={{ width: '100%', background: 'white', border: 'thin solid #efefef', boxShadow: '0 0 8px 1px #8F8F8F' }}>
                <Row>
                  <Col md="3" sm="3" xs="3">
                    <img alt="location" style={{ width: '100%', padding: '20px 5px 20px 20px' }} src={'../images/contact/location.png'}/>
                  </Col>
                  <Col md="9" sm="9" xs="9">
                    <h6 style={{ paddingTop: '10px', marginBottom: '0px', fontWeight: 'bold' }}>Alamat</h6>
                    <p style={{ fontSize: '13px', lineHeight: '1.5em', padding: '5px 0px' }}>
                      Jl Caringin Barat 1 No.29A <br/>
                      RT 015/010, Terogong, Cilandak Barat <br/>
                      Jakarta Selatan, 146376
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="4" style={{ marginBottom: '-10px' }}>
              <div style={{ width: '100%', background: 'white', border: 'thin solid #efefef', boxShadow: '0 0 8px 1px #8F8F8F' }}>
                <Row>
                  <Col md="3" sm="3" xs="3">
                    <img alt="email" style={{ width: '100%', padding: '20px 5px 20px 20px' }} src={'../images/contact/email.png'}/>
                  </Col>
                  <Col md="9" sm="9" xs="9">
                    <h6 style={{ paddingTop: '10px', marginBottom: '0px', fontWeight: 'bold' }}>Email</h6>
                    <p style={{ fontSize: '13px', lineHeight: '1.5em', padding: '5px 0px' }}>
                      info[@]penabumi.com <br/>
                      <br/>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <FormContact/>
        <Footer/>
      </div>
    );
  }
}

export default Kontak;
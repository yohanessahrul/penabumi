import React, { Component } from 'react';
import Navigation from '../component/Navigation';
import Maps from '../component/Maps';
import FormContact from '../component/FormContact';
import {
  Container, Row, Col,
} from 'reactstrap';

import Footer from '../component/Footer';


class Kontak extends Component {
  componentWillMount(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
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
                      Yohanes - 0817-0363-1403 (WA) <br/>
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
                    <p style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '10px' }}>Kantor Pusat</p>
                    <p style={{ fontSize: '13px', lineHeight: '1.5em', padding: '-30px 0px 5px 0px', marginTop: '-15px' }}>
                      Klinik Central Park Mall<br/>
                      Jl. Letjen S. Parman, Tj. Duren Sel.,<br/>
                      Grogol petamburan, <br/>
                      Jakarta Barat, Jakarta 11470
                    </p>
                    <p style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '10px' }}>Kantor Cabang</p>
                    <p style={{ fontSize: '13px', lineHeight: '1.5em', padding: '-30px 0px 5px 0px', marginTop: '-15px' }}>
                      Klinik Syifa Medika <br/>
                      Jl. Proklamasi, Dusun Sinarsari <br/> RT 008/002, Kalangsari <br/>
                      Rengasdengklok - Karawang 41352
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
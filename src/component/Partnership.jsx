import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Partnership extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: '#FAFAFA', borderTop: 'thin solid #eaeaea' }}>
        <Container>
          <Row>
            <Col md="12">
              <h3 style={{ textAlign: 'center', padding: '50px 0px 20px 0px', color: '#5a5a5a', fontFamily: 'Rubik' }}>Jaringan kerjasama</h3>
              <h5 style={{ width: '80%', textAlign: 'center', margin: '0 auto', color: '#808080', lineHeight: '1.5em', fontFamily: 'Rubik'  }}>
                Kami bekerja sama dengan berbagai perusahaan untuk menciptakan peluang bersama 
                dalam mengedepankan produk dengan hasil yang berkualitas.
              </h5>
              <Row style={{ width: '100%', marginTop: '20px', marginBottom: '30px' }}>
                <Col md="3" sm="6" xs="6">
                  <div style={{ width: '100%', paddingTop: '35px' }}>
                    <img style={{ width: '70%', display: 'table', margin: '0 auto', padding: '10px' }} src={'./images/logo-cashlez.png'} alt="logo-cashlez"/>
                  </div>
                </Col>
                <Col md="3" sm="6" xs="6">
                  <div style={{ width: '100%', paddingTop: '5px' }}>
                    <img style={{ width: '70%', display: 'table', margin: '0 auto', padding: '10px' }} src={'./images/logo-nu.jpeg'} alt="logo-datamedis"/>
                  </div>
                </Col>
                <Col md="3" sm="6" xs="6">
                  <div style={{ width: '100%', }}>
                    <img style={{ width: '45%', display: 'table', margin: '0 auto', padding: '10px' }} src={'./images/logo-rumah-tahfidz.jpeg'} alt="logo-rumah-tahfidz"/>
                  </div>
                </Col>
                <Col md="3" sm="6" xs="6">
                  <div style={{ width: '100%', paddingTop: '5px' }}>
                    <img style={{ width: '90%', display: 'table', margin: '0 auto', padding: '10px' }} src={'./images/logo-yayasan-mulia-sejahtera2.jpeg'} alt="logo-yayasan-mulia-sejahtera"/>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Partnership;
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
                <Col md="4">
                  <img style={{ display: 'table', margin: '20px auto 10px auto', padding: '10px' }} src={'./images/logo-cashlez.png'} alt="logo-cashlez"/>
                </Col>
                <Col md="4">
                  <img style={{ display: 'table', margin: '20px auto 10px auto', padding: '10px' }} src={'./images/logo-kemo.png'} alt="logo-kemo"/>
                </Col>
                <Col md="4">
                  <img style={{ display: 'table', margin: '20px auto 10px auto', padding: '10px' }} src={'./images/logo-datamedis.png'} alt="logo-datamedis"/>
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
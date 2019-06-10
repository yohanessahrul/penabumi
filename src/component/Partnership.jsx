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
              <ul className="partnerFlexboxUl">
                <li>
                  <img style={{ width: '100%', display: 'table', marginTop: '25px' }} src={'./images/logo-cashlez.png'} alt="logo-cashlez"/>
                </li>
                <li>
                  <img style={{ width: '100%',  }} src={'./images/logo-nu.jpeg'} alt="logo-datamedis"/>
                </li>
                {/* <li>
                  <img style={{ height: '100%', display: 'table', margin: '0 auto' }} src={'./images/logo-rumah-tahfidz.jpeg'} alt="logo-rumah-tahfidz"/>
                </li> */}
                {/* <li>
                  <img style={{ width: '100%', display: 'table', marginTop: '10px' }} src={'./images/logo-yayasan-mulia-sejahtera2.jpeg'} alt="logo-yayasan-mulia-sejahtera"/>
                </li> */}
                <li>
                  <img style={{ width: '100%', display: 'table', marginTop: '25px' }} src={'./images/logo-sos.png'} alt="logo-sos"/>
                </li>
                <li>
                  <img style={{ width: '100%', display: 'table', marginTop: '-10px' }} src={'./images/naja.png'} alt="logo-naja"/>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Partnership;
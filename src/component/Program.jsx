import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import p1 from '../../public/images/program1.png'

class Program extends Component {
  render() {
    return (
      <div style={{ padding: '50px 0px' }}>
        <Container>
          <Row>
            <Col md="4" className="cardStyle">
              <div className="imageCard">
                <div className="imageProgram hijau1">
                  <img alt="prog1" style={{ width: '70%', height: '100%', display: 'table', margin: '0 auto' }} src={'/images/program1.png'} />
                </div>
              </div>
              <h3 className="h3Program">PROGRAM BEASISWA</h3>
              <ul className="ulStyleProgram descColor1">
                <li>Belajar graphic design</li>
                <li>Mentor karir jarak jauh</li>
              </ul>
            </Col>
            <Col md="4" className="cardStyle">
              <div className="imageCard">
                <div className="imageProgram hijau2">
                  <img alt="prog2" style={{ width: '70%', height: '100%', display: 'table', margin: '0 auto' }} src={'/images/program2.png'} />
                </div>
              </div>
              <h3 className="h3Program">IKATAN DINAS</h3>
              <ul className="ulStyleProgram descColor2">
                <li>Bersedia komitmen fulltime</li>
                <li>Mengisi formulir</li>
                <li>Mengikuti interview & Seleksi bakat</li>
              </ul>
            </Col>
            <Col md="4" className="cardStyle">
              <div className="imageCard">
                <div className="imageProgram hijau3">
                  <img alt="prog3" style={{ width: '70%', height: '100%', display: 'table', margin: '0 auto' }} src={'/images/program3.png'} />
                </div>
              </div>
              <h3 className="h3Program">SYARAT & PROSEDUR</h3>
              <ul className="ulStyleProgram descColor3">
                <li>Pekerjaan online</li>
                <li>Potensi pendapatan >2jt/bln</li>
                <li>Sistem bagi hasil</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Program;
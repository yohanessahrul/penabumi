import React, { Component } from 'react';
import Navigation from '../component/Navigation';

import { Container, Row, Col } from 'reactstrap';
import Footer from '../component/Footer';

class Tentang extends Component {
  componentWillMount(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div>
        <Navigation/>
        <div style={{ width: '100%', height: '50px', }}></div>
        <Container>
          <Row>
            <Col md="6">
              <div style={{ width: '100%', marginBottom: '10px', padding: '20px 10px' }}>
                <h3 style={styles.h3}>Tentang</h3>
                <p style={styles.p}>
                  <b>Penabumi</b> merupakan program beasiswa berdampak sosial yang membantu setiap individu
                  yang ikut serta dapat berkembang secara ekonomi maupun kemampuan. Dengan program ini, kami
                  mengedukasi peserta beasiswa dengan pengetahuan praktik grafis design sehingga dengan cepat
                  merubah karir mereka.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div style={{ width: '100%', marginBottom: '10px', padding: '20px 10px' }}>
                <h3 style={styles.h3}>Tim Kami</h3>
                <ul style={{ padding: '0px', margin: '0px' }}>
                  <li style={styles.li}>
                    Ruben Kurniawan : Direktur Utama
                  </li>
                  <li style={styles.li}>
                    Panut : Manager Keuangan
                  </li>
                  <li style={styles.li}>
                    Nashrul Khaitami : Manager Rekrutmen
                  </li>
                  <li style={styles.li}>
                    Yohanes Sahrul : Web Developer
                  </li>
                  <li style={styles.li}>
                    Alang Mahendra : Digital Marketing
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

const styles = {
  h3: {
    color: '#2d2d2d',
    fontFamily: 'Rubik',
  },
  p: {
    color: '#464646',
    fontFamily: 'Rubik',
  },
  li: {
    color: '#464646', 
    listStyle: 'none',
    fontFamily: 'Rubik',
  },
  testih5: {
    color: 'white',
    fontFamily: 'Rubik',
    fontWeight: 'bold',
  },
  testP: {
    fontSize: '14px',
    paddingRight: '10px',
    color: '#fff',
    fontFamily: 'Rubik',
  }
}

export default Tentang;
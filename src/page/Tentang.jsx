import React, { Component } from 'react';
import Navigation from '../component/Navigation';

import { Container, Row, Col } from 'reactstrap';
import Footer from '../component/Footer';

class Tentang extends Component {
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, 
                  sapiente temporibus aspernatur ex laboriosam impedit. 
                  Totam perspiciatis repellat repellendus sed praesentium et 
                  fugit officiis voluptate veniam consectetur. Doloribus, vel velit.
                </p>
                <h3 style={styles.h3}>Visi</h3>
                <p style={styles.p}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit 
                  unde quis in quaerat voluptas magni quidem est aliquid delectus ipsam 
                  soluta doloremque, ea ratione explicabo eveniet illum quasi quod sapiente?
                </p>
                <h3 style={styles.h3}>Misi</h3>
                <p style={styles.p}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur 
                  autem facere, vel perferendis rerum deserunt iure velit odio explicabo 
                  esse fugit, sit eaque? Corrupti ullam tenetur sapiente a corporis sunt.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div style={{ width: '100%', marginBottom: '10px', padding: '20px 10px' }}>
                <h3 style={styles.h3}>Tim Kami</h3>
                <ul style={{ padding: '0px', margin: '0px' }}>
                  <li style={styles.li}>
                    <p>
                      Ruben Kurniawan : Pemilik Klinik Taman Anggrek
                    </p>
                    </li>
                  <li style={styles.li}>
                    <p>
                      Sigit : Marketing Executive
                    </p>
                    </li>
                  <li style={styles.li}>
                    <p>
                      Panut : Finance Staff
                    </p>
                    </li>
                  <li style={styles.li}>
                    <p>
                      Yohanes & Alang : Web Developer
                    </p>
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
    color: '#5f5f5f',
    fontFamily: 'Rubik',
  },
  p: {
    color: 'gray',
    fontFamily: 'Rubik',
  },
  li: {
    color: 'gray', 
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
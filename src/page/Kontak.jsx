import React, { Component } from 'react';
import Navigation from '../component/Navigation';

import {
  Container,
  Row,
  Col,
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import Footer from '../component/Footer';

class Kontak extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div style={{ width: '100%', height: '50px', }}></div>
        <Container>
          <Row>
            <Col md="6">
            <div style={{ width: '100%', height: '500px', background: 'yellow', marginBottom: '30px', padding: '20px' }}>
              <h3 style={styles.h3}>Hubungi Kami</h3>
              <p style={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga molestias doloribus nesciunt aspernatur officiis mollitia quas blanditiis repellendus quasi quia laboriosam, maiores optio corrupti magnam porro similique distinctio ipsum! Qui!</p>

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
    color: '#eef9f9',
    fontFamily: 'Rubik',
  }
}

export default Kontak;
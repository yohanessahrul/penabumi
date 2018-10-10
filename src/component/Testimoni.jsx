import React, { Component } from 'react';

class Testimoni extends Component {
  render() {
    return (
      <div>
        <Container >
          <h3 style={styles.h3}>Testimoni</h3>
          <Row style={{ background: '#3ab2b7', borderRadius: '20px', marginBottom: '30px', marginTop: '20px' }}>
            <Col md="4">
              <div style={{ width: '110px', height: '110px', background: 'yellow', padding: 0, margin: '30px auto', borderRadius: '50%', overflow: 'hidden' }} className="foto">
                <img style={{ height: '110%', marginLeft: '-10px' }} src={'../images/aep.jpg'} alt="eko-testi"/>
              </div>
            </Col>
            <Col md="8">
              <div style={{ padding: '20px 0px' }}>
                <h5 style={styles.testih5}>Eko Komarudin</h5>
                <h6 style={{ color: 'white', fontSize: '12px', background: '#1d7677', display: 'table', padding: '3px 5px', borderRadius: '2px' }}>Penerima Beasiswa</h6>
                <p style={styles.testP}>
                  Sebelum mengikuti program dari penabumi, saya bekerja sebagai ojek online. Saya sangat merasakan manfaat setelah bergabung dan dibekali ilmu grafis design.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Testimoni;
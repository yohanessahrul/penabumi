import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class CoreValue extends Component {
  render() {
    return (
      <div className="coreValue">
        <Container>
          <Row>
            <Col>
              <h2 className="h2Quote">
                "Integrasi Investasi, Beasiswa & Ikatan Dinas Teknologi Informasi Berdampak Sosial."
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CoreValue;
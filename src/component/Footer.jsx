import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Icon } from 'react-icons-kit';
import {location} from 'react-icons-kit/icomoon';
import {envelope, phone, facebook, twitter, youtubePlay} from 'react-icons-kit/fa';

class Footer extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: '#1e4661', padding: '50px 0px 10px 0px' }}>
        <Container>
          <Row>
            <Col md="4">
              <div className="footer">
                <h3 style={{ color: 'white' }}>PENABUMI</h3>
                <p style={{ color: '#bcd1de', fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quasi excepturi soluta sint libero voluptatum voluptatem dolore numquam perspiciatis aperiam quod ratione ipsum quisquam aliquam, odio repudiandae corporis optio mollitia.</p>
              </div>
            </Col>
            <Col md="4">
              <div className="footer">
                <h5 style={{ color: 'white' }}>Kontak</h5>
                <ul>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 5px 10px 0px', marginTop: '2px', color: '#4adebc' }} size={11} icon={location}/>
                    <div className="footerAddress">
                      <p>
                        Klinik Syifa Medika<br/>
                        Jl. Proklamasi, Dusun Sinarsari RT 008/002, Kalangsari<br/>
                        Rengasdengklok - Karawang 41352<br/>
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 5px 10px 0px', marginTop: '2px', color: '#4adebc' }} size={11} icon={envelope}/>
                    <div className="footerAddress">
                      <p>
                        info[at]penabumi.com
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 5px 10px 0px', marginTop: '2px', color: '#4adebc' }} size={11} icon={phone}/>
                    <div className="footerAddress">
                      <p>
                        0878 79158765
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer">
                <h5 style={{ color: 'white' }}>Sosial Media</h5>
                <ul>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={11} icon={facebook}/>
                    <div className="footerAddress">
                      <p>
                        penabumiFB
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={11} icon={twitter}/>
                    <div className="footerAddress">
                      <p>
                        penabumiTwitt
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={11} icon={youtubePlay}/>
                    <div className="footerAddress">
                      <p>
                        penabumiTube
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <p style={{ color: 'white', fontSize: '11px', textAlign: 'center', borderTop: 'thin solid #275b73', paddingTop: '20px' }}>Copyright : PT Vitamin Masyarakat Sehat 2018</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Icon } from 'react-icons-kit';
// import {location} from 'react-icons-kit/icomoon';
import {envelope, phone, facebook, twitter, youtubePlay, instagram} from 'react-icons-kit/fa';

class Footer extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: '#1e4661', padding: '50px 0px 10px 0px' }}>
        <Container>
          <Row>
            <Col md="4">
              <div className="footer">
                {/* <h3 style={{ color: 'white' }}>
                </h3> */}
                <img style={{ padding: '5px 15px', background: 'white', borderRadius: '5px' }} src={'../images/pena-bumi-logo.png'} alt="logo-penabumi-footer"/>
                {/* <p style={{ color: '#bcd1de', fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quasi excepturi soluta sint libero voluptatum voluptatem dolore numquam perspiciatis aperiam quod ratione ipsum quisquam aliquam, odio repudiandae corporis optio mollitia.</p> */}
                <h5 style={{ color: 'white', marginTop: '30px' }}>Kontak</h5>
                <ul>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', marginTop: '2px', color: '#4adebc' }} size={16} icon={envelope}/>
                    <div className="footerAddress">
                      <p>
                        info[at]penabumi.com
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', marginTop: '2px', color: '#4adebc' }} size={18} icon={phone}/>
                    <div className="footerAddress">
                      <p>
                        0817 0363 1403
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4">
              <div className="footer">
                <h5 style={{ color: 'white' }}>Alamat</h5>
                <ul>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    {/* <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 5px 10px 0px', marginTop: '2px', color: '#4adebc' }} size={11} icon={location}/> */}
                    <div className="footerAddress">
                      <h6 style={{ color: 'white' }}>Kantor Pusat</h6>
                      <p>
                        Klinik Central Park Mall<br/>
                        Jl. Letjen S. Parman, Tj. Duren Sel.,<br/>
                        Grogol petamburan, <br/>
                        Jakarta Barat, Jakarta 11470
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    {/* <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 5px 10px 0px', marginTop: '2px', color: '#4adebc' }} size={11} icon={location}/> */}
                    <div className="footerAddress">
                      <h6 style={{ color: 'white' }}>Kantor Cabang</h6>
                      <p>
                        Klinik Syifa Medika <br/>
                        Jl. Proklamasi, Dusun Sinarsari <br/> RT 008/002, Kalangsari <br/>
                        Rengasdengklok - Karawang 41352
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4">
              <div className="footer">
                <h5 style={{ color: 'white' }}>Sosial Media</h5>
                <ul>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={facebook}/>
                    <div className="footerAddress">
                      <p>
                        <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="https://www.facebook.com/pena.bumi.39" target="_blank">Facebook Penabumi</a>
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={instagram}/>
                    <div className="footerAddress">
                      <p>
                        <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="https://www.instagram.com/_penabumi_/?hl=id" target="_blank">Instagram Penabumi</a>
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={twitter}/>
                    <div className="footerAddress">
                      <p>
                        <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="https://twitter.com/penabumi" target="_blank">Twitter Penabumi</a>
                      </p>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', display: 'table' }}>
                    <Icon className="footerAddressIcon" style={{ float: 'left', padding: '0px 10px 10px 0px', color: '#4adebc' }}  size={16} icon={youtubePlay}/>
                    <div className="footerAddress">
                      <p>
                        <a style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" href="https://www.youtube.com/channel/UCpOEOxtV03-sQ8sji-zH7qA" target="_blank">Youtube Penabumi</a>
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
import React, { Component } from 'react';
import Navigation from '../component/Navigation';
import alertify from 'alertifyjs';

import {
  Container, Row, Col,
  Button, Form, Input,
  // InputGroup, 
  // InputGroupAddon,
  FormGroup,
  Label,
} from 'reactstrap';
import Footer from '../component/Footer';

import { connect } from 'react-redux';
import { contactFormAction } from '../actions/contactForm';
import { bindActionCreators } from 'redux';

class Kontak extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nama: '',
      email: '',
      pesan: '',
      namaValid: '',
      emailValid: '',
      pesanValid: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultEmail = regexEmail.test(this.state.email)

    if (this.state.nama !== '') {
      this.setState({ namaValid: '' })
    } else {
      this.setState({ namaValid: 'Harap isikan nama anda.' })
    }

    if (this.state.email !== '') {
      if (resultEmail) {
        this.setState({ emailValid: '' })
      } else {
        this.setState({ emailValid: 'Format email anda salah. Contoh: john@gmail.com' })
      }
    } else {
      this.setState({ emailValid: 'Harap isikan email anda.' })
    }

    if (this.state.pesan !== '') {
      this.setState({ pesanValid: '' })
    } else {
      this.setState({ pesanValid: 'Harap isikan pesan anda.' })
    }

    if (this.state.namaValid === '' && this.state.pesanValid === '' && resultEmail) {

      this.props.contactFormAction(this.state.email, this.state.nama, this.state.pesan) // dispatch
      
      setTimeout(() => { // set state to null again
        this.setState({
          nama: '',
          email: '',
          pesan: ''
        })
      }, 1000);

    } else {
      // alertify.alert('Salah input', 'Masukkan data dengan benar')
    }

  }

  render() {
    // const { email, nama, pesan, kirim } = this.props.lang.form;
    return (
      <div>
        <Navigation/>
        <div style={{ width: '100%', height: '50px', }}></div>
        <Container>
          <Row>
            <Col md="6">
              <Form onSubmit={this.handleSubmit} noValidate>
                <FormGroup>
                  <Label>Nama</Label>
                  <Input className="inputType" type="text" name="nama" placeholder="Nama" value={this.state.nama} onChange={this.handleChange} required/>
                  {
                    (this.state.namaValid) ? <p style={styles.warningValidate}>{this.state.namaValid}</p> : ''
                  }
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input className="inputType" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
                  {
                    (this.state.emailValid) ? <p style={styles.warningValidate}>{this.state.emailValid}</p> : ''
                  }
                </FormGroup>
                <FormGroup>
                  <Label>Pesan</Label>
                  <Input className="inputType" type="textarea" name="pesan" placeholder="Pesan" value={this.state.pesan} onChange={this.handleChange} required/>
                  {
                    (this.state.pesanValid) ? <p style={styles.warningValidate}>{this.state.pesanValid}</p> : ''
                  }
                  
                </FormGroup>
                <Button color="primary">Kirim</Button>
              </Form>
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
    color: '#7a9498',
    fontSize: '12px',
    background: '#f9f9f9',
    padding: '10px',
    borderRadius: '10px',
    border: 'thin solid #e8f0f3'
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
  },
  warningValidate: {
    color: '#ee6c6c',
    fontSize: '10px',
    padding: '2px 3px',
    borderRadius: '2px'
  }
}

const mapStateToProps = (state) => {
  return {
    resultForm: state.isSuccess
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  contactFormAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Kontak);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div style={{ width: '100%', height: '55px' }}>
        <Navbar color="light" light expand="md" fixed="top">
          <Container>
            <NavbarBrand href="/">
              <img src={'./images/pena-bumi-logo2.png'} alt="logo-penabumi"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="linkNavigation" to="/">Beranda</Link>
                </NavItem>
                <NavItem>
                  <Link className="linkNavigation" to="/about">Tentang</Link>
                </NavItem>
                <NavItem>
                  <Link className="linkNavigation" to="/contact">Kontak</Link>
                </NavItem>
                {/* <NavItem>
                  <Link className="linkNavigation" to="/login">Login</Link>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
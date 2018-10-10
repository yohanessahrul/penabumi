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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,

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
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{ color: '#575757' }}>
                    Daftar
                  </DropdownToggle>
                  <DropdownMenu right style={{ marginTop: '13px' }}>
                    <DropdownItem style={{ background: 'white' }}>
                      <Link style={{ color: '#575757', textDecoration: 'none' }} to="/institutional-register">
                        Daftar Instansi
                      </Link>
                    </DropdownItem>
                    <DropdownItem style={{ background: 'white' }}>
                      <Link style={{ color: '#575757', textDecoration: 'none' }} to="/personal-register">
                        Daftar Personal
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
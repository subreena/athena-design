import React from 'react';
import logo from '../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="sticky-top">
  <Container>
  <Link to="/" className="navbar-brand">
   <img src={logo} alt="Athena Agency" height="70px"/>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto d-flex align-items-center">
      <Link className="nav-link  text-dark mr-2" to="#home">Home</Link>
      <Link className="nav-link  text-dark mr-2" to="#about">About</Link>
      <Link className="nav-link text-dark mr-2" to="#services">Services</Link>
      <Link className="nav-link text-dark mr-2" to="#pricing">Pricing</Link>
      <Link className="nav-link mr-2 " to="#contact-us">
      <button className="global-btn">
                                      Contact Us
                </button>
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavBar;
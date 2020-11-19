import React from 'react';
import logo from '../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar style={{background: 'white'}} expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Athena Agency" height="70px" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-start">
            <a className="nav-link  text-dark mr-2" href="#home">Home</a>
            <a className="nav-link  text-dark mr-2" href="#about">About</a>
            <a className="nav-link text-dark mr-2" href="#services">Services</a>
            <a className="nav-link text-dark mr-2" href="#pricing">Pricing</a>
            <a className="nav-link mr-2" href="#contact-us">
              <button className="global-btn">
                Contact Us
                </button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>M&A store  </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/login'}>Log in</Nav.Link>
            <Nav.Link as={Link} to={'/purchases'}>Purchases</Nav.Link>
            <Nav.Link >cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
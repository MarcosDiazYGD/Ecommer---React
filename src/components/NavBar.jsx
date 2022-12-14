import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const token = localStorage.getItem('token')
    if (token) {
      setShow(true)
    } else {
      navigate('/login')
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>M&A store  </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            <Nav.Link as={Link} to={'/purchases'}>Purchases</Nav.Link>
            <Nav.Link onClick={handleShow}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CartSidebar handleClose={handleClose} handleShow={handleShow} show={show} />
    </>
  );
};

export default NavBar;
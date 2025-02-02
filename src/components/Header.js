import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
   
      <header>
        <Navbar bg= "dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/cart"><i class="fa-solid fa-shopping-cart"></i>Cart</Nav.Link>
                    
                    <Nav.Link href="/login"><i class="fa-solid fa-user"></i>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

      </header>
    
  )
}

export default Header

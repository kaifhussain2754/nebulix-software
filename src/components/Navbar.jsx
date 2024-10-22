import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

const CustomNavbar = ({ toggleColorScheme, isDarkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width: 998px)');

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <Navbar
        expand="lg"
        bg={isDarkMode ? "black" : "light"}
        variant={isDarkMode ? "dark" : "light"}
        fixed="top"
        style={{ 
          top: visible ? '0' : '-64px', 
          transition: 'top 0.3s', 
          boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'Orbitron', fontWeight: '700' , textShadow: '0 0 10px rgba(128, 0, 128, 1)' }}>
            <img 
              src="/./nebulix.png"
              alt="Nebulix Software Logo"
              style={{ width: '40px', marginRight: '10px' }}
            />
            <span style={{textShadow: '2px 2px 4px #800080'}}>Nebulix Software</span>
          </Navbar.Brand>

          {/* Conditionally Render Navbar Links */}
          {!isSmallScreen ? (
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" style={{color: 'white'}}>Home</Nav.Link>
              <Nav.Link as={Link} to="/services" style={{color: 'white'}}>Services</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{color: 'white'}}>About</Nav.Link>
              <Nav.Link as={Link} to="/getstarted" style={{color: 'white'}}>Hire Us</Nav.Link>
              <Nav.Link as={Link} to="/pricing" style={{color: 'white'}}>Pricing</Nav.Link>
              <Nav.Link as={Link} to="/portfolio" style={{color: 'white'}}>Our Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/career" style={{color: 'white'}}>Career</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" style={{color: 'white'}}>Contact Us</Nav.Link>
            </Nav>
          ) : (
            <Navbar.Toggle 
              aria-controls="offcanvasNavbar" 
              onClick={() => setExpanded(!expanded)} 
              style={{
                border: 'none',
                position: 'relative',
                outline: 'none',
                width: '45px',
                height: '40px'
              }}
            >
              <span style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: isDarkMode ? '#fff' : '#333',
                marginBottom: '5px',
              }} />
              <span style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: isDarkMode ? '#fff' : '#333',
                marginBottom: '5px',
              }} />
              <span style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: isDarkMode ? '#fff' : '#333',
              }} />
            </Navbar.Toggle>
          )}
        </Container>
      </Navbar>

      {/* Offcanvas Sidebar for Mobile */}
      <Offcanvas
        show={expanded}
        onHide={() => setExpanded(false)}
        placement="start"
        style={{ width: '250px', color: 'white', backgroundColor: isDarkMode ? "#333" : "#fff" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>Services</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/getstarted" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>Hire Us</Nav.Link>
            <Nav.Link as={Link} to="/pricing" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>Pricing</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>Our Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/career" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>Career</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={() => setExpanded(false)} style={{ color: isDarkMode ? '#fff' : '#333' }}>Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;

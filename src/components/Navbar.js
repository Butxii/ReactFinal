import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const NavigationBar = () => {
  const { toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={toggleTheme}>Toggle Theme</Button>
        <Button variant="outline-light" onClick={toggleLanguage} className="ml-2">Toggle Language</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

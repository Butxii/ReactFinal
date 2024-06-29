import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Navbar, Nav, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  const { toggleTheme } = useTheme();
  const { language, setLanguage, translations } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'ge' : 'en');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        {translations.home}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            {translations.home}
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery">
            {translations.gallery}
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            {translations.about}
          </Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={toggleTheme}>
          {translations.toggleTheme}
        </Button>
        <Button variant="outline-light" onClick={handleLanguageChange}>
          {translations.languageSwitch}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

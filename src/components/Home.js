import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { language } = useLanguage();

  return (
    <Container className="text-center">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>{language === 'en' ? 'Welcome to My App' : 'მოგესალმებით ჩემს აპლიკაციაში'}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

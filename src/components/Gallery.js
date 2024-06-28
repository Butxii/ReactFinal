import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import useFetchImages from './CustomHook';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { images, loading } = useFetchImages();
  const { language } = useLanguage();

  return (
    <Container>
      <h1 className="text-center">{language === 'en' ? 'Gallery' : 'გალერეა'}</h1>
      <Row>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          images.map((url, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <img src={url} alt={`neko-${index}`} className="img-fluid" />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Gallery;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  return (
    <Container className="about-container">
      <Row>
        <Col>
          <h1>{language === 'en' ? 'About Me' : 'ჩემს შესახებ'}</h1>
          <p>
            {language === 'en'
              ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.'
              : 'ლორემ იპსუმ დოლორ სით ამეთ, კონსეცტეთურ ადიპისცინგ ელით. ინთეგერ ნეკ ოდიო. პრეზენთ ლიბერო. სედ კურსუს ანთე დაბიბუს დიამ. სედ ნისი. ნულა ქვის სემ ატ ნიბ ელემენტუმ იმპერდიეთ. დუის საგითთის იფსუმ. პრეზენთ მავრის. ფუსცე ნეკ თელუს სედ აუგუე სემპერ პორთა. მაურის მასსა.'}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

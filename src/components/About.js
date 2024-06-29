import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { translations } = useLanguage();

  return (
    <div className="about-container">
      <h1>{translations.aboutHeader}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
};

export default About;

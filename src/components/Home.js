import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { translations } = useLanguage();

  return (
    <div className="home-container">
      <h1>{translations.welcome}</h1>
    </div>
  );
};

export default Home;

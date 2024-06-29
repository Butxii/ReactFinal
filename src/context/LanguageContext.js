import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    home: 'Home',
    gallery: 'Gallery',
    about: 'About',
    toggleTheme: 'Toggle Theme',
    languageSwitch: 'Switch to Georgian',
    welcome: 'Welcome to the Home Page',
    galleryHeader: 'Gallery',
    aboutHeader: 'About Me'
  },
  ge: {
    home: 'მთავარი',
    gallery: 'გალერეა',
    about: 'ჩემ შესახებ',
    toggleTheme: 'თემის შეცვლა',
    languageSwitch: 'გადართვა ინგლისურად',
    welcome: 'კეთილი იყოს თქვენი მობრძანება მთავარ გვერდზე',
    galleryHeader: 'გალერეა',
    aboutHeader: 'ჩემ შესახებ'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;

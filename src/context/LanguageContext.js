import React, { createContext, useState } from 'react';
import { en } from '../Components/text/en';
import { fr } from '../Components/text/fr';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const translations = language === 'en' ? en : fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}; 
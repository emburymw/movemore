import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { translations } = useContext(LanguageContext);
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          {translations.navbar.menuItems.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
        <p>&copy; {currentYear} {translations.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer; 
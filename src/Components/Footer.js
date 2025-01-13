import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#fees">Fees</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; {currentYear} Move More Canmore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
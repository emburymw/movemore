import React, { useState, useRef, useContext } from 'react';
import { Link } from "react-scroll";
import logo from "../images/fire-weed.png";
import dropdown from "../images/dropdown.png";
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language, setLanguage, translations } = useContext(LanguageContext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const buttonText = language === 'en' ? 'FR' : 'EN';

  return (
    <header className="navbar">
      <nav>
        <div className="logo">
          <Link to="home" smooth={true} duration={500} offset={-80}>
            <img src={logo} alt="Move More Canmore Logo" />
          </Link>
        </div>
        <div className="nav-controls">
          <button 
            className="language-toggle" 
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {buttonText}
          </button>
          <div 
            className="dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <button className="dropbtn" onClick={toggleDropdown}>
              <img src={dropdown} alt="Menu" className="dropdown-icon" />
            </button>
            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              {translations.navbar.menuItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.toLowerCase()} 
                  smooth={true} 
                  duration={500} 
                  offset={item === 'Services' ? -90 : -70}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 
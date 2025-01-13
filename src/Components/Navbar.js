import React, { useState, useRef } from 'react';
import { Link } from "react-scroll";
import logo from "../images/fire-weed.png";
import dropdown from "../images/dropdown.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <nav>
        <div className="logo">
          <Link to="home" smooth={true} duration={500} offset={-80}>
            <img src={logo} alt="Mobile Physio Clinic Logo" />
          </Link>
        </div>
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
            <Link to="home" smooth={true} duration={500} offset={-70}>Home</Link>
            <Link to="about" smooth={true} duration={500} offset={-70}>About</Link>
            <Link to="services" smooth={true} duration={500} offset={-90}>Services</Link>
            <Link to="fees" smooth={true} duration={500} offset={-70}>Fees</Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 
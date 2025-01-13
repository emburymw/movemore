import React from 'react';
import { Link } from "react-scroll";
import flowersBiege from '../images/logoBiege.png';

const Home = () => {
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <img src={flowersBiege} alt="Movemore Canmore Physiotherapy" className="home-logo" />
        <p>Physiotherapy services in the comfort of your home.</p>
        <br />
        <p>Move More, Do More, Canmore.</p>
        <br />
        <Link to="contact" smooth={true} duration={500}>
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Home; 
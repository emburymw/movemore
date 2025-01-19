import React, { useContext } from 'react';
import { Link } from "react-scroll";
import flowersBiege from '../images/logoBiege.png';
import { LanguageContext } from '../context/LanguageContext';

const Home = () => {
  const { translations } = useContext(LanguageContext);
  
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <img src={flowersBiege} alt="Movemore Canmore Physiotherapy" className="home-logo" />
        <p>{translations.home.tagline}</p>
        <br />
        <p>{translations.home.motto}</p>
        <br />
        <Link to="contact" smooth={true} duration={500}>
          {translations.home.bookNow}
        </Link>
      </div>
    </section>
  );
};

export default Home; 
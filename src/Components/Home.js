import React, { useContext, lazy, useEffect, useState } from 'react';
import { Link } from "react-scroll";
import flowersBiege from '../images/logoBiege.png';
import { LanguageContext } from '../context/LanguageContext';

// Lazy load images
const OptimizedImage = lazy(() => import('./OptimizedImage'));

const Home = () => {
  const { translations } = useContext(LanguageContext);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = require('../images/HealyPass.jpg');
    img.onload = () => {
      setBgLoaded(true);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className={`section home ${bgLoaded ? 'bg-loaded' : ''}`}
      style={bgLoaded ? {} : { backgroundImage: 'none' }}
    >
      <div className="home-content">
        <OptimizedImage 
          src={flowersBiege} 
          alt="Movemore Canmore Physiotherapy" 
          className="home-logo"
          width={450}
          height={450}
        />
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
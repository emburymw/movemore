import React, { useContext, lazy, useEffect, useState, Suspense } from 'react';
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
    img.fetchPriority = "high";  // Add high priority to background image
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
      <h1 className="hidden-heading">Expert Physiotherapy in Canmore – Mobile & Virtual Care</h1>
      <h2 className="hidden-heading">Personalized Treatment Plans for Recovery and Pain Relief</h2>
      <div className="home-content">
        <Suspense fallback={<div style={{height: "450px"}}></div>}>
          <OptimizedImage 
            src={flowersBiege} 
            alt="Movemore Canmore Physiotherapy" 
            className="home-logo"
            width={450}
            height={450}
            fetchPriority="high"
            loading="eager"
          />
        </Suspense>
        <p>{translations.home.tagline}</p>
        <br />
        <p>{translations.home.motto}</p>
        <br />
        <a 
          href="https://movemorecanmore.janeapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="book-now-link"
        >
          {translations.home.bookNow}
        </a>
      </div>
    </section>
  );
};

export default Home; 
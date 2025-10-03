import React, { useEffect } from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Fees from './Components/Fees';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { init } from '@emailjs/browser';
import { initializeGA, trackPageView, trackEvent } from './utils/analytics';
import { LanguageProvider } from './context/LanguageContext';
import { LoadScript } from '@react-google-maps/api';
import LoadingSpinner from './Components/LoadingSpinner';

init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const App = () => {
  useEffect(() => {
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-8BCZQ5QYB0';
    initializeGA(GA_TRACKING_ID);
    trackPageView(window.location.pathname + window.location.search);

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent >= 25 && scrollPercent < 50) {
          trackEvent('Engagement', 'Scroll', '25%');
        } else if (scrollPercent >= 50 && scrollPercent < 75) {
          trackEvent('Engagement', 'Scroll', '50%');
        } else if (scrollPercent >= 75 && scrollPercent < 90) {
          trackEvent('Engagement', 'Scroll', '75%');
        } else if (scrollPercent >= 90) {
          trackEvent('Engagement', 'Scroll', '90%');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LanguageProvider>
      <LoadScript 
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        loadingElement={<LoadingSpinner />}
      >
        <div>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Fees />
          <Contact />
          <Footer />
        </div>
      </LoadScript>
    </LanguageProvider>
  );
};

export default App;

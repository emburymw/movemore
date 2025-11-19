import React, { useEffect, useRef } from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Fees from './Components/Fees';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { init } from '@emailjs/browser';
import { initializeGA, trackPageView, trackScrollDepth } from './utils/analytics';
import { LanguageProvider } from './context/LanguageContext';
import { LoadScript } from '@react-google-maps/api';
import LoadingSpinner from './Components/LoadingSpinner';

init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const App = () => {
  const hasTrackedPageView = useRef(false);

  useEffect(() => {
    // Suppress Google Maps deprecation warnings in console
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (args[0] && args[0].includes && args[0].includes('google.maps.Marker is deprecated')) {
        return; // Suppress this specific warning
      }
      originalWarn.apply(console, args);
    };

    // Initialize GA only once
    initializeGA();
    
    // Track initial page view only once (prevents double-tracking in React.StrictMode)
    if (!hasTrackedPageView.current) {
      const currentPath = window.location.pathname + window.location.search;
      trackPageView(currentPath);
      hasTrackedPageView.current = true;
    }

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent >= 25 && scrollPercent < 50) {
          trackScrollDepth(25);
        } else if (scrollPercent >= 50 && scrollPercent < 75) {
          trackScrollDepth(50);
        } else if (scrollPercent >= 75 && scrollPercent < 90) {
          trackScrollDepth(75);
        } else if (scrollPercent >= 90) {
          trackScrollDepth(90);
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
        libraries={['marker']}
        preventGoogleFontsLoading={true}
        version="weekly"
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

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
import ReactGA from 'react-ga';
import { LanguageProvider } from './context/LanguageContext';
import { LoadScript } from '@react-google-maps/api';

init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const App = () => {
  useEffect(() => {
    ReactGA.initialize('TBD_TRACKING_ID');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <LanguageProvider>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
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

import React, { useEffect, Suspense, lazy } from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { init } from '@emailjs/browser';
import ReactGA from 'react-ga';
import { LanguageProvider } from './context/LanguageContext';

init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// Lazy load components
const About = lazy(() => import('./Components/About'));
const Services = lazy(() => import('./Components/Services'));
const Fees = lazy(() => import('./Components/Fees'));
const Contact = lazy(() => import('./Components/Contact'));

const App = () => {

  useEffect(() => {
    ReactGA.initialize('TBD_TRACKING_ID');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <Home />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Services />
          <Fees />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

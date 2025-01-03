import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Fees from './Components/Fees';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { init } from '@emailjs/browser';
init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Fees />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

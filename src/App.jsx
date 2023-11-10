import React from 'react';
import './App.css';
import Header from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Club from './components/Club/Club';
import Classes from './components/Classes/Classes';
import Schedule from './components/Schedule/Schedule';
import Rates from './components/Rates/Rates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div id="app">
      <Header />
      <Hero />
      <Club />
      <Classes />
      <Schedule />
      <Rates />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

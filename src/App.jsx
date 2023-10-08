import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Schedule from './components/Schedule/Schedule';
import Classes from './components/Classes/Classes';
import Rates from './components/Rates/Rates';
import Club from './components/Club/Club';

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
    </div>
  );
}

export default App;

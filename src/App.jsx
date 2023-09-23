import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Schedule from './components/Schedule/Schedule';
import Classes from './components/Classes/Classes';

function App() {
  return (
    <div id="app">
      <Header />
      <body>
        <Hero />
        <Classes />
        <Schedule />
        <Contact />
      </body>
      <Footer />
    </div>
  );
}

export default App;

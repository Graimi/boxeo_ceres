import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Schedule from './components/Schedule/Schedule';

function App() {
  return (
    <div id="app">
      <Header />
      <body>
        <Hero />
        <Schedule />
        <Contact />
      </body>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Navbar';

function App() {
  return (
    <div id="app">
      <Header />
      <body>
        <Hero />
        <h1>Working out</h1>
      </body>
    </div>
  );
}

export default App;

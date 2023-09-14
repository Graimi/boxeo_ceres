import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Navbar';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <body id="body">
        <h1>Working out</h1>
      </body>
    </div>
  );
}

export default App;

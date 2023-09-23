import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="cb-hero">
      <img
        className="cb-hero-logo"
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1695465535/Ceres%20Box/Logo_sin_fondo_oxxqwk.png"
        alt="logo del gimnasio"
      />
      <h1 className="cb-hero-description">SE TU MEJOR VERSIÓN</h1>
      <a href="#body">
        <h3 className="cb-hero-CTA">Inscríbete</h3>
      </a>
      <a href="#body">
        <img
          id="next"
          className="cb-hero-next"
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/avance_avv0kn.png"
          alt="flecha"
        />
      </a>
    </div>
  );
}

export default Hero;

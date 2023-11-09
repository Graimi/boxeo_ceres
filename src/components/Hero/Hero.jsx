import React from 'react';
import './Hero.css';
import { messageApi } from '../../Data/ClubData';

function Hero() {
  return (
    <div className="cb-hero">
      <img
        className="cb-hero-logo"
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1695465535/Ceres%20Box/Logo_sin_fondo_oxxqwk.png"
        alt="logo del gimnasio"
      />
      <h1 className="cb-hero-description">SE TU MEJOR VERSIÓN</h1>
      <a href={messageApi} target="_blank" rel="noopener noreferrer">
        <h3 className="cta">Inscríbete</h3>
      </a>
      <img
        className="cb-hero-mouse-move"
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1697486500/Ceres%20Box/mouse-move_jq4vcm.png"
        alt="mouse-move"
      />
    </div>
  );
}

export default Hero;

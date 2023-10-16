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
        <h3 className="cb-hero-CTA cta">Inscríbete</h3>
      </a>

      <img
        className="cb-hero-mouse-move"
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1697486500/Ceres%20Box/mouse-move_jq4vcm.png"
        alt="mouse-move"
      />
      {/* <a href="#club"> */}
      {/* <img
          id="next"
          className="cb-hero-next"
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1695466757/Ceres%20Box/flecha_m2v4bn.png"
          alt="flecha"
        /> */}
      {/* </a> */}
    </div>
  );
}

export default Hero;

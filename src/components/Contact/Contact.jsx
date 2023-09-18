import './Contact.css';
import React from 'react';
import MapComponent from '../Map/Map';

function Contact() {
  return (
    <div className="cb-contact">
      <h1>CONTACTO</h1>
      <div className="cb-contact-section">
        <article className="cb-contact-info">
          <h3>
            ¿Te gustaría probar? <br /> Primera clase gratis y sin compromiso
          </h3>
          <a href="" target="_blank" rel="noopener">
            <h3 className="cb-contact-cta">Reserva</h3>
          </a>
        </article>
        <article className="cb-contact-map">
          <MapComponent />
        </article>
      </div>
    </div>
  );
}

export default Contact;

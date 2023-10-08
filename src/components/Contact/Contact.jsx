import './Contact.css';
import React from 'react';
import MapComponent from '../Map/Map';

function Contact() {
  return (
    <div className="cb-contact" id="contact">
      <h1>CONTACTO</h1>
      <section className="cb-contact-section">
        <article className="cb-contact-info">
          <h3>
            ¿Te gustaría probar? <br /> Reserva tu primera <br /> clase gratis
          </h3>
          <a href="" target="_blank" rel="noreferrer">
            <h3 className="cb-contact-cta">Reserva</h3>
          </a>
        </article>
        <article className="cb-contact-map">
          <MapComponent />
        </article>
      </section>
    </div>
  );
}

export default Contact;

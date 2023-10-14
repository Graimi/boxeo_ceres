import './Club.css';
import React, { useState } from 'react';
import ClubData from '../../Data/ClubData';

// El componente que muestra cada título y descripción
function Reason({ title, description }) {
  // El estado que indica si el ratón está sobre el elemento o no
  const [hovered, setHovered] = useState(false);

  // La función que cambia el estado al entrar o salir el ratón
  const handleHover = (value) => {
    setHovered(value);
  };

  return (
    <li
      className="cb-club-reason"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <p className="cb-club-reason-title">{title}</p>
      {hovered && <p className="cb-club-reason-description">{description}</p>}
    </li>
  );
}

function Club() {
  return (
    <div className="cb-club cb-page-shared" id="club">
      <h1>El Club</h1>
      <section className="cb-club-section">
        <h2>Boxeo Ceres</h2>
        <h2>Fuerza y Valor</h2>
        <article className="cb-club-reasons">
          <ul className="cb-club-reasons-list">
            {ClubData.map((reason) => (
              <Reason key={reason.title} title={reason.title} description={reason.description} />
            ))}
          </ul>
        </article>
        <h3>Tu club de Boxeo en Cáceres</h3>
        <article className="cb-club-federation">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1697210715/Ceres%20Box/image-removebg-preview_1_t7mv2k.png"
            alt="Federación Española de Boxeo"
          />
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1697210716/Ceres%20Box/image-removebg-preview_o8runu.png"
            alt="Federación Extremeña de Boxeo"
          />
        </article>
      </section>
    </div>
  );
}

export default Club;

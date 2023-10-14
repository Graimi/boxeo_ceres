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
      <h3 className="title">{title}</h3>
      {hovered && <p className="description">{description}</p>}
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
          {/* <p>Kike de Manuel</p>
          <p>Preparador Nacional por la F.E.B titulado Boxeo Olímpico/Amateur en Cáceres.</p>
          <p>Respeto mutuo</p>
          <p>Diferentes niveles</p>
          <p>Todas las edades</p>
          <p>Equipamiento de calidad</p>
          <p>Horario amplio</p>
          <span>
            <p>Equipamiento de calidad</p>
            <p className="cb-club-reasons-hide">Amplias instalaciones</p>
          </span> */}
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
      <div className="container"></div>
    </div>
  );
}

export default Club;

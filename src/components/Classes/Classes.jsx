import './Classes.css';
import React from 'react';

function Classes() {
  return (
    <div className="cb-classes cb-page-shared" id="classes">
      <h1>CLASES</h1>
      <article className="cb-cards">
        <span className="cb-card-child">
          <p>Boxeo Educativo Infantil</p>
          <div className="cb-card-hide">
            <p>Para niños y niñas de 8 a 14 años *Sujeto a calendario escolar</p>
            <p>SIN CONTACTO</p>
          </div>
        </span>
        <span className="cb-card-woman">
          <p>Only woman</p>
          <div className="cb-card-hide">
            <p>Clase dirigida solo a mujeres</p>
            <p>SIN CONTACTO O CONTROLADO</p>
          </div>
        </span>
        <span className="cb-card-twelve">
          <p>12 de Saco</p>
          <div className="cb-card-hide">
            <p>
              12 asaltos de golpeo al saco guiados por un entrenador virtual que nos lleva al
              aprendizaje de la técnica de los golpes y la fuerza
            </p>
            <p>SIN CONTACTO</p>
          </div>
        </span>
        <span className="cb-card-functional">
          <p>Functional Boxing</p>
          <div className="cb-card-hide">
            <p>Circuitos funcionales específicos para el acondicionamiento físico del Boxeo</p>
            <p>SIN CONTACTO</p>
          </div>
        </span>
        <span className="cb-card-mid">
          <p>Boxeo Recreativo</p>
          <div className="cb-card-hide">
            <p>Actividad deportiva dirigida para adolescentes y adultos</p>
            <p>CONTACTO CONTROLADO</p>
          </div>
        </span>
        <span className="cb-card-advance">
          <p>Boxeo Avanzado y Competición</p>
          <div className="cb-card-hide">
            <p>Actividad deportiva dirigida para adolescentes y adultos con experiencia</p>
            <p>CONTACTO DEPORTIVO</p>
          </div>
        </span>
      </article>
    </div>
  );
}

export default Classes;

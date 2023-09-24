import './Classes.css';
import React from 'react';

function Classes() {
  return (
    <div className="cb-classes" id="classes">
      <h1>CLASES</h1>
      <article className="cb-cards">
        <span className="cb-card-child">
          <p>Boxeo Educativo Infantil</p>
          
        </span>
        <span className="cb-card-woman">
          <p>Only woman</p>
        </span>
        <span className="cb-card-twelve">
          <p>12 de Saco</p>
        </span>
        <span className="cb-card-functional">
          <p>Functional Boxing</p>
        </span>
        <span className="cb-card-mid">
          <p>Boxeo Recreativo</p>
        </span>
        <span className="cb-card-advance">
          <p>Boxeo Avanzado y Competición</p>
        </span>
      </article>
    </div>
  );
}

export default Classes;

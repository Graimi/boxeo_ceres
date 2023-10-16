import './Classes.css';
import React from 'react';
import { ClassesData } from '../../Data/ClassesData';

// Función para añadir la data de las clases
function ImportClasses() {
  return ClassesData.map((detail) => (
    <span
      id={`cb-card-${detail.Class.toLowerCase().replace(/ /g, '-')}`}
      style={{
        backgroundImage: detail.BackgroundImage,
        boxShadow: `0 1px 10px 0 ${detail.Color || 'var(--cb-color-pastel-red)'}`,
        border: `1.5px solid ${detail.Color || 'var(--cb-color-pastel-red)'}`
      }}
    >
      <p className="cb-card-title">{detail.Class}</p>

      <div className="cb-card-hover">
        <p className="cb-card-class">{detail.Class}</p>
        <p className="cb-card-description">{detail.Description}</p>
        <p className="cb-card-contact">{detail.Contact}</p>
      </div>
    </span>
  ));
}

function Classes() {
  return (
    <div className="cb-classes cb-page-shared" id="classes">
      <h1>CLASES</h1>
      <article className="cb-cards">
        <ImportClasses />
      </article>
    </div>
  );
}

export default Classes;

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
        boxShadow: `0 1px 6px 0 ${detail.Color}`,
        border: `1.5px solid ${detail.Color}`
      }}
    >
      <p
        className="cb-card-title"
        style={{
          filter: `drop-shadow(0 0 10px ${detail.Color})`
        }}
      >
        {detail.Class}
      </p>

      <div className="cb-card-hover">
        <p
          className="cb-card-class"
          style={{
            filter: `drop-shadow(0 0 10px ${detail.Color})`
          }}
        >
          {detail.Class}
        </p>
        <p className="cb-card-description">{detail.Description}</p>
        <p
          className="cb-card-contact"
          style={{
            backgroundColor: `${detail.OpacColor}`
          }}
        >
          {detail.Contact}
        </p>
      </div>
    </span>
  ));
}

// Función general para las clases
function Classes() {
  return (
    <div className="cb-classes cb-page-shared" id="classes">
      <h1>CLASES</h1>
      <section className="cb-cards">
        <ImportClasses />
      </section>
    </div>
  );
}

export default Classes;

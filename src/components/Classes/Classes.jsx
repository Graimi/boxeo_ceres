import './Classes.css';
import React from 'react';
import { ClassesData } from '../../Data/ClassesData';

// Función para añadir la data de las clases
function ImportClasses() {
  return ClassesData.map((detail) => (
    <span id={`cb-card-${detail.Class.toLowerCase().replace(/ /g, '-')}`}>
      <p className="cb-card-title">{detail.Class}</p>
      <div className="cb-card-hover">
        <p>{detail.Class}</p>
        <p>{detail.Description}</p>
        <p>{detail.Contact}</p>
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

/* eslint-disable jsx-a11y/control-has-associated-label */
import './Schedule.css';
import React from 'react';
import { ScheduleDays, ScheduleData } from '../../Data/ScheduleData';

// Función para añadir los días que hay clases
function ImportDays() {
  return ScheduleDays.map((day) => <th>{day}</th>);
}

// Función para añadir los datos de las clases
function ImportClasses() {
  return ScheduleData.map((scheduleItem) => (
    <tr key={scheduleItem.hour}>
      <td>{scheduleItem.hour}</td>
      {scheduleItem.classes.map((combinedClass) => {
        // Dividimos aquel texto que tenga un + y lo preparamos para que tenga dos clases
        const individualClasses = combinedClass
          .split('+')
          .map((className) => `cb-schedule-${className.toLowerCase().replace(/ /g, '-')}`);
        return <td className={individualClasses.join(' ')}>{combinedClass}</td>;
      })}
    </tr>
  ));
}

// Función para añadir el horario
function Schedule() {
  return (
    <div className="cb-schedule cb-page-shared" id="schedule">
      <h1>Horario</h1>
      <table className="cb-schedule-table table-big-view">
        <thead>
          <tr>
            <th>HORA*</th>
            <ImportDays />
          </tr>
        </thead>
        <tbody className="cb-schedule-tbody">
          <ImportClasses />
        </tbody>
      </table>
      <article className="cb-schedule-leyend">
        {/* Dejamos este comentario por si vuelven las clases Only Woman */}
        {/* <p className="cb-schedule-only-woman">Only Woman</p> */}
        <p className="cb-schedule-boxeo-educativo-infantil">Boxeo Educativo Infantil</p>
        <p className="cb-schedule-12-de-saco">12 de Saco</p>
        <p className="cb-schedule-functional-boxing">Functional Boxing</p>
        <p className="cb-schedule-boxeo-recreativo">Boxeo Recreativo</p>
        <p className="cb-schedule-boxeo-avanzado">Boxeo Avanzado y Competición</p>
        <p className="cb-schedule-ring">Ring</p>
      </article>
      <article className="cb-schedule-info">
        <p>* Las clases tienen una duración de 1 hora</p>
        <p>Sábado entrenamientos &quot;Grandes Figuras del Boxeo&quot; según disponibilidad</p>
        <p>Entremaniento Libre de Boxeo y Cross Training en horario de apertura</p>
      </article>
    </div>
  );
}

export default Schedule;

import './Schedule.css';
import React from 'react';

function Schedule() {
  return (
    <div className="cb-schedule">
      <h1>Horario</h1>
      <table className="cb-schedule-table">
        <thead>
          <tr>
            <th>HORA</th>
            <th>LUNES</th>
            <th>MARTES</th>
            <th>MIÉRCOLES</th>
            <th>JUEVES</th>
            <th>VIERNES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00 a 9:00</td>
            <td>Boxeo Recreativo</td>
            <td>12 de Saco</td>
            <td>Boxeo Recreativo</td>
            <td>Functional Boxing</td>
            <td rowSpan="4" >CERRADO</td>
          </tr>
          <tr>
            <td>9:30 a 10:30</td>
            <td>Only Woman Boxeo Recreativo</td>
            <td>12 de Saco</td>
            <td>Only Woman Boxeo Recreativo</td>
            <td>Only Woman Functional Boxing</td>
          </tr>
          <tr>
            <td>11:00 a 12:00</td>
            <td>Boxeo Recreativo</td>
            <td>12 de Saco</td>
            <td>Boxeo Recreativo</td>
            <td>Functional Boxing</td>
          </tr>
          <tr>
            <td>17:00 a 18:00</td>
            <td>-</td>
            <td>Boxeo Educativo Infantil</td>
            <td>-</td>
            <td>Boxeo Educativo Infantil</td>
          </tr>
          <tr>
            <td>18:00 a 19:00</td>
            <td>12 de Saco</td>
            <td>-</td>
            <td>12 de Saco</td>
            <td>-</td>
            <td>Trabajo en Ring Iniciados</td>
          </tr>
          <tr>
            <td>19:00 a 20:00</td>
            <td>Boxeo Avanzado y Competición</td>
            <td>Boxeo Recreativo</td>
            <td>Boxeo Avanzado y Competición</td>
            <td>Boxeo Recreativo</td>
            <td>Functional Boxing</td>
          </tr>
          <tr>
            <td>20:15 a 21:15</td>
            <td>Boxeo Recreativo</td>
            <td>Boxeo Avanzado y Competición</td>
            <td>Boxeo Recreativo</td>
            <td>Boxeo Avanzado y Competición</td>
            <td>Trabajo en Ring Avanzados y Competición</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;

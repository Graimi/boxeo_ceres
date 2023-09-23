import './Schedule.css';
import React from 'react';

function Schedule() {
  return (
    <div className="cb-schedule" id="schedule">
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
            <td>8:00 - 9:00</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-twelve">12 de Saco</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-functional">Functional Boxing</td>
            <td rowSpan="4" />
          </tr>
          <tr>
            <td>9:30 - 10:30</td>
            <td className="cb-schedule-mid">
              <span className=".cb-schedule-woman">Only Woman</span> <br /> Boxeo Recreativo
            </td>
            <td className="cb-schedule-twelve">12 de Saco</td>
            <td className="cb-schedule-mid">
              Only Woman <br /> Boxeo Recreativo
            </td>
            <td className="cb-schedule-functional">
              Only Woman <br /> Functional Boxing
            </td>
          </tr>
          <tr>
            <td>11:00 - 12:00</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-twelve">12 de Saco</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-functional">Functional Boxing</td>
          </tr>
          <tr>
            <td>17:00 - 18:00</td>
            <td />
            <td className="cb-schedule-child">Boxeo Educativo Infantil</td>
            <td />
            <td className="cb-schedule-child">Boxeo Educativo Infantil</td>
          </tr>
          <tr>
            <td>18:00 - 19:00</td>
            <td className="cb-schedule-twelve">12 de Saco</td>
            <td />
            <td className="cb-schedule-twelve">12 de Saco</td>
            <td />
            <td className="cb-schedule-mid">Trabajo en Ring Iniciados</td>
          </tr>
          <tr>
            <td>19:00 - 20:00</td>
            <td className="cb-schedule-advance">Boxeo Avanzado y Competición</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-advance">Boxeo Avanzado y Competición</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-functional">Functional Boxing</td>
          </tr>
          <tr>
            <td>20:15 - 21:15</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-advance">Boxeo Avanzado y Competición</td>
            <td className="cb-schedule-mid">Boxeo Recreativo</td>
            <td className="cb-schedule-advance">Boxeo Avanzado y Competición</td>
            <td className="cb-schedule-advance">Trabajo en Ring Avanzados y Competición</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>SESIONES DE 1 HORA</strong>
      </p>
      <p>Sábado entrenamientos "Grandes Figuras del Boxeo" según disponibilidad</p>
      <p>ENTRENAMIENTO LIBRE BOXEO Y CROSS TRAINING EN HORARIO DE APERTURA</p>
   AÑADIR EN OTRAS VIEWS SOLO LOS COLORES Y LAS LEYENDAS ARRIBA O DEBAJO, LOS DIAS DE LA SEMANA CON L M X;
    </div>
  );
}

export default Schedule;

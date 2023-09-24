/* eslint-disable jsx-a11y/control-has-associated-label */
import './Schedule.css';
import React from 'react';

function Schedule() {
  return (
    <div className="cb-schedule" id="schedule">
      <h1>Horario</h1>
      <table className="cb-schedule-table table-big-view">
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
              Boxeo Recreativo<p className="cb-schedule-woman">Woman</p>
            </td>
            <td className="cb-schedule-twelve">12 de Saco</td>
            <td className="cb-schedule-mid">
              Boxeo Recreativo<p className="cb-schedule-woman">Woman</p>
            </td>
            <td className="cb-schedule-functional">
              Functional Boxing<p className="cb-schedule-woman">Woman</p>
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
            <td className="cb-schedule-twelve"> 12 de Saco</td>
            <td />
            <td className="cb-schedule-twelve">12 de Saco</td>
            <td />
            <td className="cb-schedule-mid">
              Iniciados <br />
              <p className="cb-schedule-ring">Ring</p>
            </td>
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
            <td className="cb-schedule-advance">
              Avanzado y Competición <br /> <p className="cb-schedule-ring">Ring</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="cb-schedule-table table-small-view">
        <thead>
          <tr>
            <th>HORA</th>
            <th>L</th>
            <th>M</th>
            <th>X</th>
            <th>J</th>
            <th>V</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00 9:00</td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-twelve"></td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-functional"></td>
            <td rowSpan="4" />
          </tr>
          <tr>
            <td>9:30 10:30</td>
            <td className="cb-schedule-mid">
              <p className="cb-schedule-woman">{'\u200B'}</p>
            </td>
            <td className="cb-schedule-twelve"></td>
            <td className="cb-schedule-mid">
              <p className="cb-schedule-woman">{'\u200B'}</p>
            </td>
            <td className="cb-schedule-functional">
              <p className="cb-schedule-woman">{'\u200B'}</p>
            </td>
          </tr>
          <tr>
            <td>11:00 12:00</td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-twelve"></td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-functional"></td>
          </tr>
          <tr>
            <td>17:00 18:00</td>
            <td />
            <td className="cb-schedule-child"></td>
            <td />
            <td className="cb-schedule-child"></td>
          </tr>
          <tr>
            <td>18:00 19:00</td>
            <td className="cb-schedule-twelve"> </td>
            <td />
            <td className="cb-schedule-twelve"></td>
            <td />
            <td className="cb-schedule-mid">
              <p className="cb-schedule-ring">Ring</p>
            </td>
          </tr>
          <tr>
            <td>19:00 20:00</td>
            <td className="cb-schedule-advance"></td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-advance"></td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-functional"></td>
          </tr>
          <tr>
            <td>20:15 21:15</td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-advance"></td>
            <td className="cb-schedule-mid"></td>
            <td className="cb-schedule-advance"></td>
            <td className="cb-schedule-advance">
              <p className="cb-schedule-ring">Ring</p>
            </td>
          </tr>
        </tbody>
      </table>
      <article className="cb-schedule-leyend">
        <p className="cb-schedule-woman">Only Woman</p>
        <p className="cb-schedule-child">Boxeo Educativo Infantil</p>
        <p className="cb-schedule-twelve">12 de Saco</p>
        <p className="cb-schedule-functional">Functional Boxing</p>
        <p className="cb-schedule-mid">Boxeo Recreativo</p>
        <p className="cb-schedule-advance">Boxeo Avanzado y Competición</p>
      </article>
      <article className="cb-schedule-info">
        <p>Sábado entrenamientos "Grandes Figuras del Boxeo" según disponibilidad</p>
        <p>Entremaniento Libre de Boxeo y Cross Training en horario de apertura</p>
      </article>
    </div>
  );
}

export default Schedule;

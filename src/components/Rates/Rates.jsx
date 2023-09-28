import './Rates.css';
import React from 'react';

function Rates() {
  return (
    <div className="cb-rates">
      <h1>Tarifas</h1>
      <span>
        <article className="cb-monthly">
          <h3>Mensualidades</h3>
          <table>
            <tr>
              <th>Frecuencia Semanal</th>
              <th>Precio</th>
            </tr>
            <tr>
              <td>1 día</td>
              <td>25€</td>
            </tr>
            <tr>
              <td>2 días</td>
              <td>40€</td>
            </tr>
            <tr>
              <td>3 días</td>
              <td>25€</td>
            </tr>
            <tr>
              <td>4 días</td>
              <td>40€</td>
            </tr>
            <tr>
              <td>Boxeo Educativo Infantil</td>
              <td>35€</td>
            </tr>
          </table>
        </article>
        <article className="cb-discounts">
          <h3>Descuentos</h3>
          <table>
            <tr>
              <td>Tráete un amigo</td>
              <td>%</td>
            </tr>
            <tr>
              <td>Universitarios</td>
              <td>%</td>
            </tr>
            <tr>
              <td>Permanencia trimestral</td>
              <td>%</td>
            </tr>
          </table>
        </article>
        <article className="cb-fee">
          <h3>Matrícula</h3>
          <p>15€</p>
        </article>
      </span>
    </div>
  );
}

export default Rates;

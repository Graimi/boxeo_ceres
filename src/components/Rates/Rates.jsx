import './Rates.css';
import React from 'react';

function Rates() {
  return (
    <div className="cb-rates" id="rates">
      <h1>Tarifas</h1>
      <span>
        <article className="cb-rates-monthly">
          <h3>Mensualidades</h3>
          <table className="cb-rates-table">
            <thead>
              <tr>
                <th>Días x semana</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 día</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2 días</td>
                <td>40</td>
              </tr>
              <tr>
                <td>3 días</td>
                <td>45</td>
              </tr>
              <tr>
                <td>4 días</td>
                <td>50</td>
              </tr>
              <tr>
                <td>5 días</td>
                <td>55</td>
              </tr>
              <tr className="cb-rates-child">
                <td>
                  Boxeo Educativo <br /> Infantil
                </td>
                <td>35</td>
              </tr>
            </tbody>
          </table>
          <p className="cb-rates-enrollment">Matrícula 15€</p>
        </article>
        <article className="cb-rates-discount">
          <h3>Descuentos</h3>
          <table className="cb-rates-table">
            <tbody>
              <tr>
                <td>Tráete un amigo</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Universitarios</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Permanencia trimestral</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </article>
      </span>
    </div>
  );
}

export default Rates;

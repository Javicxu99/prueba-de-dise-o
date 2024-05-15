import React from 'react';
import './Precios.css';
import datos from './datos.json'; // Asegúrate de que la ruta al archivo es correcta

function Precios() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pricing-container">
      {datos.precios.map((plan, index) => ( // Acceso a la clave "precios" del JSON
        <div key={index} className="pricing-card">
          <h2>{plan.titulo}</h2>
          <p>{plan.precio}</p>
          <ul>
            {plan.caracteristicas.map((caracteristica, idx) => (
              <li key={idx}>{caracteristica}</li>
            ))}
          </ul>
          <button onClick={() => handleClick(plan.url)}>
            Sign Up
          </button>
        </div>
      ))}
    </div>
  );
}

export default Precios;

/*
export function Precios() {
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h2>Free</h2>
        <p>0€/mes</p>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
      </div>
      <div className="pricing-card">
        <h2>Medium</h2>
        <p>10€/mes</p>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
      </div>
      <div className="pricing-card">
        <h2>Pro</h2>
        <p>30€/mes</p>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Precios;
*/
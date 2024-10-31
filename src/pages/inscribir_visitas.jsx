import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InscribirVisita = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRegisterVisit = () => {
    navigate('/inscripcion-exitosa');
  };

  return (
    <div className="registro-container">
      <h2>Ingrese los datos de su visita</h2>
      <input
        type="text"
        placeholder="Escribe aquí..."
        value={inputValue}
        onChange={handleInputChange}
        className="input-visit"
      />
      <button onClick={handleRegisterVisit} className="register-button">
        Registrar visita
      </button>
    </div>
  );
};

export default InscribirVisita;



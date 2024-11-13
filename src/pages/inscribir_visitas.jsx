import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InscribirVisita = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputRut, setInputRut] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleInputRutChange = (event) => {
    setInputRut(event.target.value);
  };


  const handleRegisterVisit = () => {
    navigate('/inscripcion-exitosa');
  };

  return (
    <div className="registro-container">
      <h2>Ingrese los datos de su visita</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={inputValue}
        onChange={handleInputChange}
        className="input-visit"
      />
        <input
        type="text"
        placeholder="Apellido"
        value={inputValue2}
        onChange={handleInputChange2}
        className="input-visit"
      />

      <input
        type="text"
        placeholder="Rut"
        value={inputRut}
        onChange={handleInputRutChange}
        className="input-visit"
      />


      <button onClick={handleRegisterVisit} className="register-button">
        Registrar visita
      </button>
    </div>
  );
};

export default InscribirVisita;



import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ReservaExitosa = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className='template-page'>
      <p className='center-text'> Reserva realizada con éxito</p>
      <button onClick={handleRedirect} className='redirect-button'>
        Volver al inicio
      </button>
    </div>
  );
};

export default ReservaExitosa;
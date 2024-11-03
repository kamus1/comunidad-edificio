import React, { useState } from 'react';
import Calendario from '../components/calendario';

export const RealizarReservas = () => {
  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleSpaceSelection = (space) => {
    setSelectedSpace(space);
  };

  return (
    <div className='realizar-reserva'>
      <div className="column">
      <h2>Seleccione un espacio para reservar</h2>
        <button 
          onClick={() => handleSpaceSelection('Sala de eventos')} 
          className="home-button"
        >
          Sala de eventos
        </button>
        <button 
          onClick={() => handleSpaceSelection('Quincho')} 
          className="home-button"
        >
          Quincho
        </button>
        <button 
          onClick={() => handleSpaceSelection('Sala de conferencias')} 
          className="home-button"
        >
          Sala de conferencias
        </button>
      </div>
      <div >
      {selectedSpace && (
        <div className="column" >
          <h2>Reserva para: {selectedSpace}</h2>
          <Calendario selectedSpace={selectedSpace} />
        </div>
      )}
      </div>
    </div>
  );
};

export default RealizarReservas;


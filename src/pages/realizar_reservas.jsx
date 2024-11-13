import React, { useState } from 'react';
import { GiBarbecue, GiPartyPopper } from 'react-icons/gi'; // Iconos para eventos y quincho
import { RiPresentationFill } from "react-icons/ri"; // Icono para la sala de conferencias
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
          className={`home-button ${selectedSpace === 'Sala de eventos' ? 'selected' : ''}`}
        >
          <GiPartyPopper size="2em" /> Sala de eventos
        </button>
        <button 
          onClick={() => handleSpaceSelection('Quincho')} 
          className={`home-button ${selectedSpace === 'Quincho' ? 'selected' : ''}`}
        >
          <GiBarbecue size="2em" /> Quincho
        </button>
        <button 
          onClick={() => handleSpaceSelection('Sala de conferencias')} 
          className={`home-button ${selectedSpace === 'Sala de conferencias' ? 'selected' : ''}`}
        >
          <RiPresentationFill size="2em" /> Sala de conferencias
        </button>
      </div>

      <div className="column-calendar">
        {selectedSpace && (
          <div className="column-calendar-inner">
            <h2>Reserva para: {selectedSpace}</h2>
            <Calendario selectedSpace={selectedSpace} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RealizarReservas;


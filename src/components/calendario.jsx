import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = ({ selectedSpace }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  // Maneja la selección de fecha desde react-calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleReservation = () => {
    if (selectedDate && selectedTime) {
      alert(`Reserva confirmada para ${selectedSpace} el día ${selectedDate.toLocaleDateString()} a las ${selectedTime}.`);
    } else {
      alert("Por favor, seleccione una fecha y una hora.");
    }
  };

  return (
    <div className="calendario">
      <label>Seleccione la fecha:</label>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      
      <label>
        Hora:
        <input type="time" value={selectedTime} onChange={handleTimeChange} />
      </label>
      
      <button onClick={handleReservation} className="home-button">
        Confirmar reserva
      </button>
    </div>
  );
};

export default Calendario;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const VerNoticias = () => {
  // Ejemplo de noticias con fechas añadidas
  const noticias = [
    { 
      id: 5,
      titulo: "Feliz halloween 👻👻🎃",
      mensaje: "¡Que tengan un Halloween lleno de sustos y dulces! 🎃🍬👻",
      fecha: "31 de octubre, 2024",
    },
    {
      id: 1,
      titulo: "Vecinos Aviso !!",
      mensaje: "El lunes de las 1:30 PM a las 3:00 PM no habrá agua en el departamento número 4, por reparaciones y mantenciones.",
      fecha: "23 de octubre, 2024",
    },
    {
      id: 2,
      titulo: "Feliz 18 !! 🎉 🎉",
      mensaje: "Hola vecinos, les deseo que tengan buenas fiestas patrias y feliz 18.",
      fecha: "17 de septiembre, 2024",
    },
    {
      id: 3,
      titulo: "Alerta perro suelto en el departamento número 6.",
      mensaje: "Anda un perro suelto por recepción del departamento 6, está todo embarrado y está ensuciando el piso.",
      fecha: "10 de agosto, 2024",
    },
    {
      id: 4,
      titulo: "Hola vecinos, buen día.",
      mensaje: "Les comunico que…",
      fecha: "5 de julio, 2024",
    },
  ];

  return (
    <div className="ver-noticias-page">
      <h2>Noticias y Anuncios</h2>
      <div className="noticias-container">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="noticia-card">
            <FontAwesomeIcon icon={faUserCircle} size="2x" className="noticia-icon" />
            <div className="noticia-content">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.mensaje}</p>
              <p className="noticia-fecha">{noticia.fecha}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerNoticias;

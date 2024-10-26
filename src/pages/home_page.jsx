import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBillWave, faNewspaper, faCalendarAlt, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  // Función para manejar la navegación al hacer clic en los botones
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <h1>¿Qué desea realizar?</h1>
      <div className="button-container">
        <button onClick={() => handleNavigation('/pagar-gastos-cuentas')} className="home-button">
          <FontAwesomeIcon icon={faMoneyBillWave} size="2x" /> Pagar gastos comunes y cuentas
        </button>
        <button onClick={() => handleNavigation('/ver-noticias')} className="home-button">
          <FontAwesomeIcon icon={faNewspaper} size="2x" /> Ver noticias
        </button>
        <button onClick={() => handleNavigation('/realizar-reservas')} className="home-button">
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" /> Realizar reservas
        </button>
        <button onClick={() => handleNavigation('/inscribir-visitas')} className="home-button">
          <FontAwesomeIcon icon={faIdBadge} size="2x" /> Inscribir visitas
        </button>
      </div>

      <footer className="footer">
        <p>Comunidad Condominio Santa María</p>
        <p>Dirección: Av. España 1680, Valparaíso</p>
      </footer>
    </>
  );
};



export default HomePage;

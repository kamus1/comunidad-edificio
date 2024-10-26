import React from 'react'
import { NavLink } from 'react-router-dom'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faCalendarAlt, faIdBadge, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className="nav-bar">
      <div>
        <NavLink className={navLinkClass} to="/">
          <FontAwesomeIcon icon={faHome} /> Inicio
        </NavLink>
      </div>

      <div>
        <NavLink className={navLinkClass} to="/pagar-gastos-cuentas">
          <FontAwesomeIcon icon={faMoneyBillWave} /> Pagar gastos comunes y cuentas
        </NavLink>

        <NavLink className={navLinkClass} to="/ver-noticias">
          <FontAwesomeIcon icon={faNewspaper} /> Ver noticias
        </NavLink>
        
        <NavLink className={navLinkClass} to="/realizar-reservas">
          <FontAwesomeIcon icon={faCalendarAlt} /> Realizar reservas
        </NavLink>
        
        <NavLink className={navLinkClass} to="/inscribir-visitas">
          <FontAwesomeIcon icon={faIdBadge} /> Inscribir visitas
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
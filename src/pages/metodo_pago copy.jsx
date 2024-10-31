import React from 'react';
import { useNavigate } from 'react-router-dom';

import webpay from '../assets/webpay.png';
import khipu from '../assets/khipu.png';
import servipag from '../assets/servipag.png';

export const MetodoPago = () => {

  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="metodo-pago-page">
      <h2>Seleccione su método de pago</h2>

      {/* Sección de imágenes */}
      <div className="imagenes-container">
        <div className='fila-imagenes'>
        <img
          src={webpay}
          alt="webpay"
          onClick={() => handleImageClick('/pago-exitoso')}
          className="imagen-link"
        />
        <img
          src={khipu}
          alt="khipu"
          onClick={() => handleImageClick('/pago-exitoso')}
          className="imagen-link"
        />
        </div>
        <div className='imagen centrada'>
        <img
          src={servipag}
          alt="servipag"
          onClick={() => handleImageClick('/pago-exitoso')}
          className="imagen-link"
        />
        </div>
      </div>
    </div>
  );
};

export default MetodoPago;
    
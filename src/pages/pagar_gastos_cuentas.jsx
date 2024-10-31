import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PagarGastosCuentas = () => {
  //datos de ejemplo para las cuentas
  const cuentas = [
    { id: 1, nombre: "Luz", monto: "20.000 CLP" },
    { id: 2, nombre: "Agua", monto: "14.000 CLP" },
    { id: 3, nombre: "Gas", monto: "20.000 CLP" },
    { id: 4, nombre: "Gasto común", monto: "50.000 CLP" },
  ];

  const navigate = useNavigate();

  // Función para manejar la navegación al hacer clic en los botones
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  //total calculado
  const total = "104.000 CLP";

  return (
    <div className="pagar-gastos-cuentas-page">
      <h2>Cuentas a pagar:</h2>

      <div>
      <div className="cuentas-container">
        <span>Pagar individualmente:</span>
        {cuentas.map((cuenta) => (
          <div key={cuenta.id} className="cuenta-item">
            <span>{cuenta.nombre}: {cuenta.monto}</span>
            <button onClick={() => handleNavigation('/metodo-pago')} className="home-button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }}>
              Pagar
            </button>
          </div>
        ))}
      </div>

      <div className="total-container">
        <span>Pagar todas juntas:</span>
        <div>
        <span>Total: {total}</span>
        </div>

        <div>
        <button onClick={() => handleNavigation('/metodo-pago')} className="home-button" style={{ display: 'flex', justifyContent: 'center', width: '200px', height: '100px'}}>
          Pagar todas las cuentas
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PagarGastosCuentas;

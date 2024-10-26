import React from 'react';

export const PagarGastosCuentas = () => {
  //datos de ejemplo para las cuentas
  const cuentas = [
    { id: 1, nombre: "Luz", monto: "20.000 CLP" },
    { id: 2, nombre: "Agua", monto: "14.000 CLP" },
    { id: 3, nombre: "Gas", monto: "20.000 CLP" },
    { id: 4, nombre: "Gasto común", monto: "50.000 CLP" },
  ];

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
            <button className="pagar-button">Pagar</button>
          </div>
        ))}
      </div>

      <div className="total-container">
        <span>Pagar todas juntas:</span>
        <div>
        <span>Total: {total}</span>
        </div>

        <div>
        <button className="pagar-todo-button">Pagar todas las cuentas</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PagarGastosCuentas;

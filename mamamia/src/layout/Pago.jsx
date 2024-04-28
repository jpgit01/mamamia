import React from "react";
import { useContext } from "react";
import { MiContexto } from "../context/Contexto";

const Pago = () => {
    const {totalPrecio} =  useContext(MiContexto);
  return (
    <div className="text-center mt-5 mb-5">
      <h3>Ajustes para el Pago</h3>
      <h2 className="mt-3 m-5 p-2 border border-success rounded bg-dark text-light">Total a pagar: {totalPrecio.toLocaleString(
                        "es-CL"
                      )}</h2>
    </div>
  );
};

export default Pago;

import React, { createContext, useState } from 'react';
import pizzas from "../public/pizzas.json"

export const MiContexto = createContext();

const Contexto = ({ children }) => {
  const datosIniciales = pizzas

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [montosIndividuales, setMontosIndividuales] = useState({});

  const agregarProducto = (producto) => {
    setProductosSeleccionados([...productosSeleccionados, producto]);
  };

  const sumarCantidad = (id, monto) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: (prevCantidades[id] || 0) + 1,
    }));
    setMontosIndividuales((prevMontos) => ({
      ...prevMontos,
      [id]: (prevMontos[id] || 0) + monto,
    }));
  };
  
  const restarCantidad = (id, monto) => {
    if (cantidades[id] && cantidades[id] > 0) {
      setCantidades((prevCantidades) => ({
        ...prevCantidades,
        [id]: prevCantidades[id] - 1,
      }));
      setMontosIndividuales((prevMontos) => ({
        ...prevMontos,
        [id]: (prevMontos[id] || 0) - monto,
      }));
    } else {
      setCantidades((prevCantidades) => ({
        ...prevCantidades,
        [id]: 0, 
      }));
      setMontosIndividuales((prevMontos) => ({
        ...prevMontos,
        [id]: 0, 
      }));
    }
  };

  return (
    <MiContexto.Provider value={{ 
      datos: datosIniciales, 
      productosSeleccionados, 
      agregarProducto,
      sumarCantidad, // Agregamos sumarCantidad al contexto
      restarCantidad // Agregamos restarCantidad al contexto
    }}>
      {children}
    </MiContexto.Provider>
  );
};

export default Contexto;
import React, { createContext, useState } from 'react';
import pizzas from "../public/pizzas.json"

export const MiContexto = createContext();

const Contexto = ({ children }) => {
  const datosIniciales = pizzas

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const agregarProducto = (producto) => {
    setProductosSeleccionados([...productosSeleccionados, producto]);
  };

  const [totalPrecio, setTotalPrecio] = useState(0)

  const calcPrecio = (precio)=>{
    setTotalPrecio(precio)
  }

  return (
    <MiContexto.Provider value={{ 
      datos: datosIniciales, 
      productosSeleccionados, 
      agregarProducto,
      totalPrecio,
      calcPrecio
    }}>
      {children}
    </MiContexto.Provider>
  );
};

export default Contexto;
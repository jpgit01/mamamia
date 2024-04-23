import React, { createContext, useState } from 'react';

export const MiContexto = createContext();

const Contexto = ({ children }) => {
  const datosIniciales = [
    { id: 1, nombre: 'Objeto 1', descripcion: 'Descripción del objeto 1', src: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg', monto: 5000 },
    { id: 2, nombre: 'Objeto 2', descripcion: 'Descripción del objeto 2', src: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg', monto: 5000 },
    { id: 3, nombre: 'Objeto 3', descripcion: 'Descripción del objeto 3', src: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg', monto: 5000 },
    { id: 4, nombre: 'Objeto 4', descripcion: 'Descripción del objeto 4', src: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg', monto: 5000 },
    { id: 5, nombre: 'Objeto 5', descripcion: 'Descripción del objeto 5', src: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg', monto: 5000 },
    { id: 6, nombre: 'Objeto 6', descripcion: 'Descripción del objeto 6', src: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg', monto: 5000 }
  ];

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const agregarProducto = (producto) => {
    setProductosSeleccionados([...productosSeleccionados, producto]);
  };

  return (
    <MiContexto.Provider value={{ datos: datosIniciales, productosSeleccionados, agregarProducto }}>
      {children}
    </MiContexto.Provider>
  );
};

export default Contexto;
import React, { useContext } from 'react';
import { MiContexto } from '../context/Contexto';

const Carrito = () => {
  const { productosSeleccionados } = useContext(MiContexto);

  return (
    <div>
      <h2>Productos Seleccionados</h2>
      <ul>
        {productosSeleccionados.map(producto => (
          <li key={producto.id}>
            <p>ID: {producto.id}</p>
            <p>Nombre: {producto.nombre}</p>
            <p>Descripción: {producto.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;

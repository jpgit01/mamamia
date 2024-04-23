import React, { useContext, useState } from 'react';
import { MiContexto } from '../context/Contexto';

const Carrito = () => {
  const { productosSeleccionados, setProductosSeleccionados } = useContext(MiContexto);
  const [cantidades, setCantidades] = useState({});
  
  const [montosIndividuales, setMontosIndividuales] = useState({}); 

  const sumarCantidad = (id, monto) => {
    setCantidades(prevCantidades => ({
      ...prevCantidades,
      [id]: (prevCantidades[id] || 0) + 1
    }));
    setMontosIndividuales(prevMontos => ({
      ...prevMontos,
      [id]: (prevMontos[id] || 0) + monto 
    }));
  };

  const restarCantidad = (id, monto) => {
    if (cantidades[id] && cantidades[id] > 0) {
      setCantidades(prevCantidades => ({
        ...prevCantidades,
        [id]: prevCantidades[id] - 1
      }));
      setMontosIndividuales(prevMontos => ({
        ...prevMontos,
        [id]: (prevMontos[id] || 0) - monto 
      }));
    }
  };

  return (
    <div>
      <h2>Productos Seleccionados</h2>
      <ul>
        {productosSeleccionados.map(producto => (
          <li key={producto.id}>
            <p>ID: {producto.id}</p>
            <p>Nombre: {producto.nombre}</p>
            <p>Descripción: {producto.descripcion}</p>
            <p>Monto: {producto.monto}</p>
            <p>Cantidad: {cantidades[producto.id] || 0}</p>
            <p>Total: {montosIndividuales[producto.id] || 0}</p>
            <button onClick={() => sumarCantidad(producto.id, producto.monto)}>+</button>
            <button onClick={() => restarCantidad(producto.id, producto.monto)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
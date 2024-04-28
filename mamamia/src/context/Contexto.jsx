import React, { createContext, useState } from 'react';
import pizzas from "../public/pizzas.json"

export const MiContexto = createContext();

const Contexto = ({ children }) => {
  const datosIniciales = pizzas

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [totalPrecio, setTotalPrecio] = useState(0);
  
  const agregarProducto = (producto) => {
    const productoExistenteIndex = productosSeleccionados.findIndex((p) => p.id === producto.id);
  
    if (productoExistenteIndex !== -1) {
   
      const nuevosProductos = [...productosSeleccionados];
      nuevosProductos[productoExistenteIndex].cantidad += 1;
      setProductosSeleccionados(nuevosProductos);
    } else {
      const productoConCantidad = { ...producto, cantidad: 1 }; 
      setProductosSeleccionados([...productosSeleccionados, productoConCantidad]);
    }

    setTotalPrecio(totalPrecio + producto.price);
  };


  const ajustarCantidad = (index, cantidad) => {
    const nuevosProductos = [...productosSeleccionados];
    nuevosProductos[index].cantidad += cantidad;
    setProductosSeleccionados(nuevosProductos);
    const nuevoTotal = totalPrecio + (cantidad * nuevosProductos[index].price);
    setTotalPrecio(nuevoTotal);
  };

  return (
    <MiContexto.Provider value={{ 
      datos: datosIniciales, 
      productosSeleccionados, 
      agregarProducto,
      totalPrecio,
      ajustarCantidad
    }}>
      {children}
    </MiContexto.Provider>
  );
};

export default Contexto;

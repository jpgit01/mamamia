import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MiContexto } from '../context/Contexto';
const Pizza = () => {
  const { id } = useParams();
  const datos = useContext(MiContexto);
  
  const pizza = datos.find(item => item.id === parseInt(id));

  return (
    <div>
      {pizza ? (
        <div>
          <h2>{pizza.nombre}</h2>
          <p>{pizza.descripcion}</p>
        </div>
      ) : (
        <div>Pizza no encontrada</div>
      )}
    </div>
  );
};

export default Pizza;
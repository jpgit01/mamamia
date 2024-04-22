import { createContext } from 'react';
export const MiContexto = createContext()

import React from 'react'

const Contexto = ({children}) => {
    const datos = [
        { id: 1, nombre: 'Objeto 1', descripcion: 'Descripción del objeto 1' },
        { id: 2, nombre: 'Objeto 2', descripcion: 'Descripción del objeto 2' },
        { id: 3, nombre: 'Objeto 3', descripcion: 'Descripción del objeto 3' },
        { id: 4, nombre: 'Objeto 4', descripcion: 'Descripción del objeto 4' },
        { id: 5, nombre: 'Objeto 5', descripcion: 'Descripción del objeto 5' },
        { id: 6, nombre: 'Objeto 6', descripcion: 'Descripción del objeto 6' }
      ];


  return (
    <MiContexto.Provider value={datos}>{children}</MiContexto.Provider>
  )
}

export default Contexto
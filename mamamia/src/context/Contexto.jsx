import { createContext } from 'react';
import { useState } from 'react';

export const MiContexto = createContext()

import React from 'react'

const Contexto = ({children}) => {
    const [saludo, setSaludo] = useState("contexto global")
  return (
    <MiContexto.Provider value={saludo}>{children}</MiContexto.Provider>
  )
}

export default Contexto
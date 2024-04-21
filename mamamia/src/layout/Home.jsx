import React from 'react'
import { useContext } from 'react'
import { MiContexto } from '../context/Contexto'

const Home = () => {
  const saludo = useContext(MiContexto)
  return (
    
    <div>
      <h1>Home</h1>
      <p>{saludo}</p>

    </div>
  )
}

export default Home
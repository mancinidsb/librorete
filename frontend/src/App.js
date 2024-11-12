import React, { useState } from 'react'
import './index.css'

function App() {
  const [contador, setContador] = useState(0)

  const aumentarContador = () => { 
    setContador (contador + 1)
  }

  const diminuirContador = () => {
    setContador(contador-1)
  }


  return (
    <div className="App">
      <h1>{contador}</h1>
      <button onClick={aumentarContador}>+ Aumentar</button>
      <button onClick={diminuirContador}>+ Diminuir</button>
    </div>
  )
}

export default App

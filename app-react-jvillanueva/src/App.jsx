import React from 'react'
import DatosPersonales from './components/DatosPersonales'
import EstudiosRealizados from './components/EstudiosRealizados'
import HerramientasUtilizadas from './components/HerramientasUtilizadas'
import DeportesFavoritos from './components/DeportesFavoritos'
import './App.css'

function App() {
  return (
    <div className="container">
      <DatosPersonales />
      <EstudiosRealizados />
      <HerramientasUtilizadas />
      <DeportesFavoritos />
    </div>
  )
}

export default App


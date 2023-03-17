import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import { WelcomePage } from '../SistemaVacunacion/administrador/componentes/WelcomePage'
import { InicioSesion } from '../InicioSesion/InicioSesion'
import { SistemaVacunacionRoutes } from '../SistemaVacunacion/routes/SistemaVacunacionRoutes'


export const AppRouter = () => {
  return (
    <>
        
     <Routes>
     <Route path="/welcome" element={<WelcomePage />} />
     <Route path="/" element={<InicioSesion />} />
     <Route path="/admin/*" element={<SistemaVacunacionRoutes />} />
    
     </Routes>
    </>
  )
}

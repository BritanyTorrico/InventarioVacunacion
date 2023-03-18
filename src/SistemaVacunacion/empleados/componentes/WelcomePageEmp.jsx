import React, { useContext, useEffect } from 'react'
import { Titulo } from '../../elementos/Formularios';
import EmpleadoContext from '../context/EmpleadoContext';
export const WelcomePageEmp = () => {
  const {data,getUsuarioById} = useContext(EmpleadoContext)
useEffect(() => {
  getUsuarioById();
}, [])

  return (
    <>
    <Titulo>Bienvenido.... {data.nombre}</Titulo>
    </>
  )
}

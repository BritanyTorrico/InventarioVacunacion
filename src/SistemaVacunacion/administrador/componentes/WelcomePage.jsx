import React from 'react'
import { Titulo } from '../../elementos/Formularios';


export const WelcomePage = () => {


 const nombre= localStorage.getItem("NOMBRE");
  return (
    <>
    <Titulo>Bienvenido/a... {nombre}</Titulo>
    </>
  )
}


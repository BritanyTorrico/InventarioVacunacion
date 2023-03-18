import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import EmpleadoContext from '../context/EmpleadoContext';

export const WelcomePageEmp = () => {
  const {data,getUsuarioById} = useContext(EmpleadoContext)
useEffect(() => {
  getUsuarioById();
}, [])
  return (
    <>
    <ContenedorTitulo>
    <TituloBienvenido>Bienvenido... {data.nombre}</TituloBienvenido>
    </ContenedorTitulo>
    </>
  );
  
}
const TituloBienvenido = styled.h3`
    color:#4169E1;
`;
const ContenedorTitulo = styled.div`
    padding: 2% 10%;
  
`;
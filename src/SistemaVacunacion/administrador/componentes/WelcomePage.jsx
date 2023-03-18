import React from "react";
import styled from "styled-components";
export const WelcomePage = () => {
  const nombre = localStorage.getItem("NOMBRE");
  const role = localStorage.getItem("ROLE");
  return (
    <>
      <ContenedorInicio>
        <TituloBienvenido>Bienvenido {nombre}</TituloBienvenido>
        <TituloBienvenido>Rol: {role}</TituloBienvenido>
      </ContenedorInicio>
    </>
  );
};
const TituloBienvenido = styled.h3`
  color: #4169e1;
`;
const ContenedorInicio = styled.div`
  padding: 2% 10%;
`;

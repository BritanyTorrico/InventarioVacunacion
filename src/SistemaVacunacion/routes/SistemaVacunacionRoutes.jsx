import React from "react";
import NavBar from "../../ui/NavBar";
import { FormularioEmpleado } from "../administrador/componentes/FormularioEmpleado";
import {  Route, Routes } from 'react-router-dom'
import { ListaEmpleados } from "../administrador/componentes/ListaEmpleados";
import { WelcomePage } from "../administrador/componentes/WelcomePage";


export const SistemaVacunacionRoutes = () => {
  return (
    <>
 
    <NavBar />
      <Routes>
        <Route path="registrar" element={<FormularioEmpleado />} />
        <Route path="listar" element={<ListaEmpleados />} />
        <Route path="welcome" element={<WelcomePage />} />

      </Routes>
 
     
    </>
  );
};

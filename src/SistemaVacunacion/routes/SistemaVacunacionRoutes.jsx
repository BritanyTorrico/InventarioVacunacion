import React from "react";
import NavBar from "../../ui/NavBar";
import { FormularioEmpleado } from "../administrador/componentes/FormularioEmpleado";
import {  Route, Routes } from 'react-router-dom'
import { ListaEmpleados } from "../administrador/componentes/ListaEmpleados";
import { WelcomePage } from "../administrador/componentes/WelcomePage";
import { WelcomePageEmp } from "../empleados/componentes/WelcomePageEmp";
import { PerfilUsuario } from "../empleados/componentes/PerfilUsuario";
import { EditarUsuario } from "../empleados/componentes/EditarUsuario";


export const SistemaVacunacionRoutes = () => {
  return (
    <>
 
    <NavBar />
      <Routes>
        <Route path="registrar" element={<FormularioEmpleado />} />
        <Route path="listar" element={<ListaEmpleados />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="inicio" element={<WelcomePageEmp />} />
        <Route path="perfil" element={<PerfilUsuario />} />
        <Route path="editar" element={<EditarUsuario />} />
      </Routes>
 
     
    </>
  );
};

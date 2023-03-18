import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AdministradorContextProvider } from "./SistemaVacunacion/administrador/context/AdministradorContex";
import { EmpleadoContextProvider } from "./SistemaVacunacion/empleados/context/EmpleadoContext";

export const VacunacionApp = () => {
  return (
    <>
     <EmpleadoContextProvider> 
      <AdministradorContextProvider>
        <AppRouter />
      </AdministradorContextProvider>
      </EmpleadoContextProvider>
    </>
  );
};

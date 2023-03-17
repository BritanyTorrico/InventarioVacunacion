import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AdministradorContextProvider } from "./SistemaVacunacion/administrador/context/AdministradorContex";

export const VacunacionApp = () => {
  return (
    <>
      <AdministradorContextProvider>
        <AppRouter />
      </AdministradorContextProvider>
    </>
  );
};

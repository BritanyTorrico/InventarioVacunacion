import React, { createContext, useState } from "react";

import axios from "../../../api/axios";
import useStore from "../../../store";

const EmpleadoContext = createContext();
export default EmpleadoContext;
export function EmpleadoContextProvider(props) {
  const usuario = useStore((state) => state.usuario);
  const [data, setData] = useState("");
  const getUsuarioById = async () => {
    try {
      await axios
        .get(`/empleado/${usuario.id}`)
        .then((resp) => setData(resp.data));
    } catch (error) {
      console.log(error);
    }
  };

  const updateUsuario = async (user) => {
    try {
      await axios.patch(`/empleado/${usuario.id}`, user).then((resp) => {
        setData(resp.data);
      });
    } catch (error) {
  console.log(error);
    }
  };

  return (

      <EmpleadoContext.Provider
        value={{
          getUsuarioById,
          data,
          updateUsuario,
        }}
      >
        {props.children}
      </EmpleadoContext.Provider>

  );
}

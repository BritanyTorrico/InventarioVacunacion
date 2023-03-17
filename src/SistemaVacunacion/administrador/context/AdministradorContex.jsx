import React, { createContext, useState } from "react";

import axios from "../../../api/axios";

const AdministradorContext = createContext();
export default AdministradorContext;
export function AdministradorContextProvider(props) {
  const [editando, setEditando] = useState(false);
  const [empleado, setEmpleado] = useState({});
  const [data, setData] = useState([]);
  const updateEmpleado = async (emp) => {
    console.log(emp);
    try {
      await axios.put(`/empleado/${empleado.id}`, emp).then((resp) => {
        console.log(resp);
      });
    } catch (error) {
      console.log(error);
    }
  };
    const createEmpleado = async (emp) => {
    try {
        await axios.post("/empleado", emp).then((resp) => {
            console.log(resp);
          });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEmpleado = async (id) => {
   
    try {
        await axios.delete(`/empleado/${id}`).then((resp) => {
            console.log(resp);
            getEmpleados();
          });
    } catch (error) {
      console.log(error);
    }
  };
  const getEmpleados = async () => {
    try {
      await axios.get("/empleado").then((resp) => setData(resp.data));
    } catch (error) {
      console.log("no se pudo obtener los empleados");
    }
    return data;
  };

  return (
    <AdministradorContext.Provider
      value={{
        updateEmpleado,
        editando,
        setEditando,
        empleado,
        setEmpleado,
        createEmpleado,
        deleteEmpleado,getEmpleados,data
      }}
    >
      {props.children}
    </AdministradorContext.Provider>
  );
}

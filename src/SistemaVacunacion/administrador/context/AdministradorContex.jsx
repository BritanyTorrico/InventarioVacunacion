import React, { createContext, useState } from "react";
import axios from "../../../api/axios";

const AdministradorContext = createContext();

export default AdministradorContext;

export function AdministradorContextProvider(props) {
  const [editando, setEditando] = useState(false);
  const [empleado, setEmpleado] = useState({});
  const [data, setData] = useState([]);

  const updateEmpleado = async (emp) => {
    try {
      await axios.patch(`/empleado/${empleado.id}`, emp);
    } catch (error) {
      console.log(error);
    }
  };

  const createEmpleado = async (emp) => {
    try {
      await axios.post("/empleado", emp);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmpleado = async (id) => {
    try {
      await axios.delete(`/empleado/${id}`).then((resp) => {
        getEmpleados();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getEmpleados = async () => {
    try {
      await axios.get("/db.json").then((resp) => setData(resp.data.empleado));
    } catch (error) {
      console.log("No se pudo obtener los empleados:", error);
    }
    return data;
  };

  const getEmpleadoByParametro = async (parametro, valor) => {
    try {
      await axios.get(`/db.json?${parametro}=${valor}`).then((resp) =>
        setData(resp.data.empleado)
      );
    } catch (error) {
      console.log("No se pudo obtener los empleados:", error);
    }
    return data;
  };

  const getEmpleadoByRange = async (parametro, opcion, opcion2) => {
    try {
      await axios
        .get(
          `/db.json?${parametro}_gte=${opcion}&${parametro}_lte=${opcion2}`
        )
        .then((resp) => setData(resp.data.empleado));
    } catch (error) {
      console.log("No se pudo obtener los empleados:", error);
    }
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
        deleteEmpleado,
        getEmpleados,
        data,
        getEmpleadoByParametro,
        getEmpleadoByRange,
      }}
    >
      {props.children}
    </AdministradorContext.Provider>
  );
}

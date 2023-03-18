import React, { useEffect, useContext } from "react";
import {  Titulo } from "../../elementos/Formularios";
import { Table, Button } from "react-bootstrap";
import AdministradorContext from "../context/AdministradorContex";
import { useNavigate } from "react-router-dom";
import { AlertaModal } from "./AlertaModal";
import { FiltroBusqueda } from "./FiltroBusqueda";


export const ListaEmpleados = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getEmpleados();
  }, []);

  const { setEmpleado, setEditando, deleteEmpleado, getEmpleados, data } =
    useContext(AdministradorContext);

  const handleUpdate = (emp) => {
    setEditando(true);
    setEmpleado(emp);
    navigate("/admin/registrar");
  };

  return (
    <>
      <Titulo>LISTA DE EMPLEADOS:</Titulo>
     <FiltroBusqueda />
    
     {data.length === 0 ? <h3>No existe ninguna concidencia </h3> : 
     <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Username</th>
            <th>Contraseña</th>
            <th>Estado Vacunación</th>
            <th>Tipo de Vacuna </th>
            <th>Fecha de Vacunación </th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nombre}</td>
              <td>{emp.apellido}</td>
              <td>{emp.correo}</td>
              <td>{emp.username}</td>
              <td>{emp.password}</td>
              <td>{emp.estadoVacunacion}</td>
              <td>{emp.tipoVacuna}</td>
              <td>{emp.fechaVacunacion}</td>
              <td>
                <Button variant="success" onClick={() => handleUpdate(emp)}>
                  Editar
                </Button>
              </td>
           
              <td>
                <AlertaModal
                  title="Advertencia"
                  mensaje="Esta seguro de que desea eliminar este registro?"
                  valor="Eliminar"
                  handleDeleteMoneda={() => deleteEmpleado(emp.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
     </>}
     
    </>
  );
};

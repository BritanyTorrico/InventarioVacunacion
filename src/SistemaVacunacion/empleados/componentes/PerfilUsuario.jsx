import React, { useContext, useEffect } from "react";

import { Titulo } from "../../elementos/Formularios";
import EmpleadoContext from "../context/EmpleadoContext";
import Table from "react-bootstrap/Table";
import { ContenedorBoton, ContenedorDatos } from "../../elementos/Etiquetas";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const PerfilUsuario = () => {
  const navigate = useNavigate();

  const { getUsuarioById, data } = useContext(EmpleadoContext);
  useEffect(() => {
    getUsuarioById();
  }, []);
  const handleUpdate = () => {
    navigate("/empleado/editar");
  };
  return (
    <>
      <Titulo>Informacion General:</Titulo>
      <ContenedorBoton>
        <Button variant="success" onClick={handleUpdate}>
          Editar Información
        </Button>
      </ContenedorBoton>
      <ContenedorDatos>
        <Table striped hover size="md">
          <tbody>
            <tr>
              <td>
                <b>Nombre :</b>
              </td>
              <td>{data.nombre}</td>
            </tr>
            <tr>
              <td>
                <b>Apellido :</b>
              </td>
              <td>{data.apellido}</td>
            </tr>
            <tr>
              <td>
                <b>Celula :</b>
              </td>
              <td>{data.celula}</td>
            </tr>
            <tr>
              <td>
                <b>Correo :</b>
              </td>
              <td>{data.correo}</td>
            </tr>
            <tr>
              <td>
                <b>Telefono :</b>
              </td>
              <td>{data.telefono}</td>
            </tr>
            <tr>
              <td>
                <b>Dirección :</b>
              </td>
              <td>{data.direccion}</td>
            </tr>
            <tr>
              <td>
                <b>Fecha de Nacimiento :</b>
              </td>
              <td>{data.fechaNacimiento}</td>
            </tr>
            <tr>
              <td>
                <b>Estado Vacunacion :</b>
              </td>
              <td>{data.estadoVacunacion}</td>
            </tr>

            {data.estadoVacunacion === "vacunado" && (
              <>
                <tr>
                  <td>
                    <b>Fecha de Vacunacion :</b>
                  </td>
                  <td>{data.fechaVacunacion}</td>
                </tr>
                
                <tr>
                  <td>
                    <b>Tipo de Vacuna :</b>
                  </td>
                  <td>{data.tipoVacuna}</td>
                </tr>
                <tr>
                  <td>
                    <b>Numero de dosis :</b>
                  </td>
                  <td>{data.numeroDosis}</td>
                </tr>
              </>
            )}
          </tbody>
        </Table>
      </ContenedorDatos>
    </>
  );
};

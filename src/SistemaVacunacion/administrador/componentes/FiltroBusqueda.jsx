import React, { useContext, useState } from "react";
import {
  ContenedorBotonBusqueda,
  ContenedorCard,
  ContenedorCardPequenio,
  LabelNormal,
} from "../../elementos/Etiquetas";
import styled from "styled-components";
import { LabelRadio } from "../../elementos/Formularios";
import { Form, Button } from "react-bootstrap";
import AdministradorContext from "../context/AdministradorContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const FiltroBusqueda = () => {
  const [tipoFiltro, setTipoFiltro] = useState("empleado");
  const [opcion, setOpcion] = useState("");
  const [opcion2, setOpcion2] = useState("");
  const [opcion3, setOpcion3] = useState("");
  const { getEmpleadoByParametro, getEmpleadoByRange, getEmpleados } =
    useContext(AdministradorContext);

  const onTipoFiltroChange = (e) => {
    setTipoFiltro(e.target.value);
    setOpcion("");
    setOpcion2("");
    setOpcion3("");
  };
  const onOptionChange = (e) => {
    setOpcion(e.target.value);
  };
  const onOptionChange2 = (e) => {
    setOpcion2(e.target.value);
  };
  const onOptionChange3 = (e) => {
    setOpcion3(e.target.value);
  };
  const verificarFechas = () => {
    let fechasValidas = true;
    if (opcion2 > opcion3) {
      fechasValidas = false;
      toast.error(
        "La fecha de inicio no puede ser posterior a la fecha de fin",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
    return fechasValidas;
  };
  const handleBuscar = () => {
    if (tipoFiltro === "fechaVacunacion") {
      if (opcion2 !== "" && opcion3 !== "") {
        if (verificarFechas()) {
          getEmpleadoByRange(tipoFiltro, opcion2, opcion3);
        }
      } else {
        toast.error("ingrese un parametro de busqueda valido", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      if (tipoFiltro === "empleado") {
        getEmpleados();
      } else {
        if (tipoFiltro !== "" && opcion !== "") {
          getEmpleadoByParametro(tipoFiltro, opcion);
        }
      }
    }
  };
  return (
    <>
      <div>
        <LabelRadio>Filtrar por:</LabelRadio>
        <input
          type="radio"
          name={tipoFiltro}
          value="tipoVacuna"
          checked={tipoFiltro === "tipoVacuna"}
          onChange={onTipoFiltroChange}
          id="tipoVacuna"
        />
        <LabelNormal htmlFor="tipoVacuna">Tipo de vacuna</LabelNormal>
        <input
          type="radio"
          name={tipoFiltro}
          value="estadoVacunacion"
          checked={tipoFiltro === "estadoVacunacion"}
          onChange={onTipoFiltroChange}
          id="estadoVacunacion"
        />
        <LabelNormal htmlFor="estadoVacunacion">
          Estado de vacunación
        </LabelNormal>
        <input
          type="radio"
          name={tipoFiltro}
          value="fechaVacunacion"
          checked={tipoFiltro === "fechaVacunacion"}
          onChange={onTipoFiltroChange}
          id="fechaVacunacion"
        />
        <LabelNormal htmlFor="fechaVacunacion">Fecha de vacunación</LabelNormal>
        <input
          type="radio"
          name={tipoFiltro}
          value="empleado"
          checked={tipoFiltro === "empleado"}
          onChange={onTipoFiltroChange}
          id="empleado"
        />
        <LabelNormal htmlFor="empleado">Todos</LabelNormal>
        {tipoFiltro === "fechaVacunacion" && (
          <>
            <ContenedorDate>
              <ContenedorCard>
                <label>Fecha de Inicio vacunación:</label>
                <input type="date" onChange={onOptionChange2} value={opcion2} />
                <label>Fecha de Fin vacunación:</label>
                <input type="date" onChange={onOptionChange3} value={opcion3} />
              </ContenedorCard>
            </ContenedorDate>
          </>
        )}

        {tipoFiltro === "tipoVacuna" && (
          <>
            <ContenedorCardPequenio>
              <ContenedorCard>
                <div>
                  <label>Tipo de vacuna:</label>
                </div>
                <div>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onOptionChange}
                    value={opcion}
                  >
                    <option>Seleccione una vacuna</option>
                    <option value="Sputnik">Sputnik</option>
                    <option value="AstraZeneca">AstraZeneca</option>
                    <option value="Pfizer">Pfizer</option>
                    <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
                  </Form.Select>
                </div>
              </ContenedorCard>
            </ContenedorCardPequenio>
          </>
        )}
        {tipoFiltro === "estadoVacunacion" && (
          <>
            <ContenedorCardPequenio>
              <ContenedorCard>
                <div>
                  <label>Estado Vacunación:</label>
                </div>
                <div>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onOptionChange}
                    value={opcion}
                  >
                    <option>Seleccione un estado</option>
                    <option value="vacunado">Vacunado</option>
                    <option value="no vacunado">No vacunado</option>
                  </Form.Select>
                </div>
              </ContenedorCard>
            </ContenedorCardPequenio>
          </>
        )}
      </div>
      <ContenedorBotonBusqueda>
        <Button variant="primary" onClick={handleBuscar}>
          Buscar
        </Button>
      </ContenedorBotonBusqueda>

      <ToastContainer />
    </>
  );
};

const ContenedorDate = styled.div`
  margin-bottom: 40px;
  input {
    margin: 7px;
  }
`;

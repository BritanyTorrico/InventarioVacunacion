import React, { useContext, useState } from "react";
import {
    ContenedorBotonBusqueda,
  ContenedorCard,
  ContenedorCardPequenio,
  LabelNormal,
} from "../../elementos/Etiquetas";
import { LabelRadio } from "../../elementos/Formularios";
import { Form, Button } from "react-bootstrap";
import AdministradorContext from "../context/AdministradorContex";

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
  const handleBuscar = () => {
    console.log("busco");
    if (tipoFiltro === "fechaVacunacion") {
      if (opcion2 != "" && opcion3 != "") {
        getEmpleadoByRange(tipoFiltro, opcion2, opcion3);
      } else {
        console.log("ingrese un parametro de busqueda valido");
      }
    } else {
      if (tipoFiltro === "empleado") {
        getEmpleados();
      } else {
        if (tipoFiltro != "" && opcion != "") {
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
            <ContenedorCardPequenio>
              <ContenedorCard>
                <div>
                  <label>Fecha de vacunación:</label>
                </div>
                <div>
                  <input
                    type="date"
                    onChange={onOptionChange2}
                    value={opcion2}
                  />
                  <input
                    type="date"
                    onChange={onOptionChange3}
                    value={opcion3}
                  />
                </div>
              </ContenedorCard>
            </ContenedorCardPequenio>
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
    

    
    
    
    </>
  );
};

import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { InputValidate } from "../../componentes/InputValidate";
import Form from "react-bootstrap/Form";
import {
  Boton,
  ContenedorBotonCentrado,
  Formulario,
  Label,
  LabelRadio,
  Titulo,
} from "../../elementos/Formularios";
import EmpleadoContext from "../context/EmpleadoContext";
import { useNavigate } from "react-router-dom";
import { ContenedorCard, TituloSecundario } from "../../elementos/Etiquetas";
import { InputNormal } from "../../../elementos/Formulario";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditarUsuario = () => {
  const navigate = useNavigate();
  const { data, updateUsuario } = useContext(EmpleadoContext);

  const [nombre, setNombre] = useState({ campo: data.nombre, valido: "true" });
  const [apellido, setApellido] = useState({
    campo: data.apellido,
    valido: "true",
  });
  const [celula, setCelula] = useState({ campo: data.celula, valido: "true" });
  const [correo, setCorreo] = useState({ campo: data.correo, valido: "true" });
  const [fechaNacimiento, setFechaNacimiento] = useState(
    data.fechaNacimiento ? data.fechaNacimiento : ""
  );
  const [direccion, setDireccion] = useState({
    campo: data.direccion ? data.direccion : "",
    valido: "true",
  });
  const [telefono, setTelefono] = useState({
    campo: data.telefono ? data.telefono : "",
    valido: "true",
  });

  const [estadoVacunacion, setEstadoVacunacion] = useState(
    data.estadoVacunacion ? data.estadoVacunacion : ""
  );
  const [tipoVacuna, setTipoVacuna] = useState(
    data.tipoVacuna ? data.tipoVacuna : ""
  );
  const [fechaVacunacion, setFechaVacunacion] = useState(
    data.fechaVacunacion ? data.fechaVacunacion : ""
  );
  const [numeroDosis, setNumeroDosis] = useState(
    data.numeroDosis ? data.numeroDosis : ""
  );
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos maximo 40 caracteres.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celula: /^\d{10}$/, // 10 digitos numericos.
    direccion2: /.*/, // cualquier caracter sin limite
    telefono: /^\d{0,15}$/,
  };
  const validarFecha = (fecha) => {
    let fechaValida = true;
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const fechaActual = `${year}-${month}-${day}`;
    if (fecha > fechaActual) {
      fechaValida = false;
      toast.error("La fecha no puede ser posterior a la fecha del dia de hoy", {
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
    return fechaValida;
  };
  const validarCardVacunacion = () => {
    let valido = false;
    if (tipoVacuna !== "" && numeroDosis !== "" && fechaVacunacion !== "") {
      valido = true;
    } else {
      toast.error("Ingrese toda la información de la vacuna", {
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
    return valido;
  };
  const handleFecha = (e) => {
    setFechaVacunacion(e.target.value);
  };
  const resetForm = () => {
    setNombre({ campo: "", valido: null });
    setApellido({ campo: "", valido: null });
    setCelula({ campo: "", valido: null });
    setCorreo({ campo: "", valido: null });
    setDireccion({ campo: "", valido: null });
    setTelefono({ campo: "", valido: null });
    setFechaNacimiento("");
    setEstadoVacunacion("");
    setTipoVacuna("");
    setNumeroDosis("");
    setFechaVacunacion("");
  };
  const onOptionChange = (e) => {
    setTipoVacuna("");
    setNumeroDosis("");
    setFechaVacunacion("");
    setEstadoVacunacion(e.target.value);
  };

  const handleSelect = (e) => {
    setTipoVacuna(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      celula.valido === "true" &&
      correo.valido === "true" &&
      direccion.valido === "true" &&
      telefono.valido === "true"
    ) {
      if (estadoVacunacion === "vacunado") {
        if (validarFecha(fechaVacunacion)) {
          if (validarCardVacunacion()) {
            const usuarioDTO = {
              nombre: nombre.campo,
              apellido: apellido.campo,
              celula: celula.campo,
              correo: correo.campo,
              direccion: direccion.campo,
              telefono: telefono.campo,
              fechaNacimiento: fechaNacimiento,
              estadoVacunacion: estadoVacunacion,
              fechaVacunacion: fechaVacunacion,
              tipoVacuna: tipoVacuna,
              numeroDosis: numeroDosis,
            };
            updateUsuario(usuarioDTO);
            resetForm();
            navigate("/empleado/perfil");
          }
        }
      } else {
        const usuarioDTO = {
          nombre: nombre.campo,
          apellido: apellido.campo,
          celula: celula.campo,
          correo: correo.campo,
          direccion: direccion.campo,
          telefono: telefono.campo,
          fechaNacimiento: fechaNacimiento,
          estadoVacunacion: estadoVacunacion,
          fechaVacunacion: "",
          tipoVacuna: "",
          numeroDosis: "",
        };
        updateUsuario(usuarioDTO);
        resetForm();
        navigate("/empleado/perfil");
      }
    }
  };
  return (
    <>
      <Titulo>Editar información</Titulo>
      <Formulario onSubmit={handleSubmit}>
        <InputValidate
          estado={nombre}
          cambiarEstado={setNombre}
          tipo="text"
          label="Nombres :"
          placeholder="Ingrese su nombre"
          name="apellido"
          mensajeValidacion="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />

        <InputValidate
          estado={apellido}
          cambiarEstado={setApellido}
          tipo="text"
          label="Apellidos:"
          placeholder="Ingrese los apellidos"
          name="apellido"
          mensajeValidacion="El apellido solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />
        <InputValidate
          estado={celula}
          cambiarEstado={setCelula}
          tipo="text"
          label="Celula:"
          placeholder="Ingrese su Celula de identidad"
          name="celula"
          mensajeValidacion="Solo acepta valores numericos y unico de 10 digitos."
          expresionRegular={expresiones.celula}
        />
        <InputValidate
          estado={correo}
          cambiarEstado={setCorreo}
          tipo="email"
          label="Correo Electronico:"
          placeholder="Ingrese su correo"
          name="correo"
          mensajeValidacion="Ingrese un correo electronico valido."
          expresionRegular={expresiones.correo}
        />
        <InputValidate
          estado={direccion}
          cambiarEstado={setDireccion}
          tipo="text"
          label="Dirección de domicilio:"
          placeholder="Ingrese su dirección"
          name="correo"
          mensajeValidacion="La direccion solo puede contener letras y espacios"
          expresionRegular={expresiones.direccion2}
        />
        <InputValidate
          estado={telefono}
          cambiarEstado={setTelefono}
          tipo="number"
          label="Teléfono:"
          placeholder="Ingrese su teléfono"
          name="correo"
          mensajeValidacion="Ingrese solo valores numericos maximo 15 digitos."
          expresionRegular={expresiones.telefono}
        />
        <ContenedorCard>
          <div>
            <Label>Fecha de nacimiento:</Label>
          </div>
          <div>
            <input
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>
        </ContenedorCard>
        <div>
          <TituloSecundario>Estado vacunación</TituloSecundario>
          <input
            type="radio"
            name={estadoVacunacion}
            value="vacunado"
            checked={estadoVacunacion === "vacunado"}
            onChange={onOptionChange}
            id="vacunado"
          />

          <LabelRadio htmlFor="vacunado">Vacunado</LabelRadio>

          <input
            type="radio"
            name={estadoVacunacion}
            value="no vacunado"
            checked={estadoVacunacion === "no vacunado"}
            onChange={onOptionChange}
            id="no vacunado"
          />
          <LabelRadio htmlFor="no vacunado">No Vacunado</LabelRadio>
          {estadoVacunacion === "vacunado" && (
            <Card>
              <Card.Header>
                <b>Información de vacuna</b>
              </Card.Header>
              <Card.Body>
                <ContenedorCard>
                  <div>
                    <label>Tipo de vacuna:</label>
                  </div>
                  <div>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={handleSelect}
                      value={tipoVacuna}
                    >
                      <option>Seleccione una vacuna</option>
                      <option value="Sputnik">Sputnik</option>
                      <option value="AstraZeneca">AstraZeneca</option>
                      <option value="Pfizer">Pfizer</option>
                      <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
                    </Form.Select>
                  </div>
                </ContenedorCard>
                <ContenedorCard>
                  <div>
                    <label>Número de dosis:</label>
                  </div>
                  <div>
                    <InputNormal
                      type="number"
                      onChange={(e) =>
                        setNumeroDosis(Math.max(1, e.target.value))
                      }
                      value={numeroDosis}
                    />
                  </div>
                </ContenedorCard>
                <ContenedorCard>
                  <div>
                    <label>Fecha de vacunación:</label>
                  </div>
                  <div>
                    <input
                      type="date"
                      onChange={handleFecha}
                      value={fechaVacunacion}
                    />
                  </div>
                </ContenedorCard>
              </Card.Body>
            </Card>
          )}
        </div>

        <ContenedorBotonCentrado>
          <Boton type="submit">Editar</Boton>
        </ContenedorBotonCentrado>
      </Formulario>
      <ToastContainer />
    </>
  );
};

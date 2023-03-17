import React, { useContext, useEffect, useState } from "react";
import { InputValidate } from "../../componentes/InputValidate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  Titulo,
  LabelRadio,
} from "../../elementos/Formularios";
import AdministradorContext from "../context/AdministradorContex";



export const FormularioEmpleado = () => {

  const { editando, setEditando, empleado, updateEmpleado,createEmpleado } =
    useContext(AdministradorContext);
  
  useEffect(() => {
    if (editando) {
      setNombre({ campo: empleado.nombre, valido: "true" });
      setApellido({ campo: empleado.apellido, valido: "true" });
      setCelula({ campo: empleado.celula, valido: "true" });
      setCorreo({ campo: empleado.correo, valido: "true" });
      setEstadoEmpleado(empleado.estadoEmpleado);
    }
  }, [empleado, editando]);

  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [celula, setCelula] = useState({ campo: "", valido: null });
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [estadoEmpleado, setEstadoEmpleado] = useState("inactivo");

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos maximo 40 caracteres.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celula: /^\d{10}$/, // 10 digitos numericos.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      celula.valido === "true" &&
      correo.valido === "true"
    ) {
      if (editando) {
        if(empleado.estadoEmpleado !== estadoEmpleado){
          if(estadoEmpleado === "activo"){
            console.log("generoo");
            const us=generarUsername();
            const pas=generarPassword();
            const empleadoDTO = {
              id: uuidv4().slice(0, 7),
              nombre: nombre.campo,
              apellido: apellido.campo,
              celula: celula.campo,
              correo: correo.campo,
              role: "empleado",
              username: us,
              password: pas,
              estadoEmpleado: estadoEmpleado
            };
            updateEmpleado(empleadoDTO);
          }else{
            const empleadoDTO = {
              id: uuidv4().slice(0, 7),
              nombre: nombre.campo,
              apellido: apellido.campo,
              celula: celula.campo,
              correo: correo.campo,
              role: "empleado",
              username: "",
              password: "",
              estadoEmpleado: estadoEmpleado,
            };
            updateEmpleado(empleadoDTO);

            
          }
        }else{
          const empleadoDTO = {
            nombre: nombre.campo,
            apellido: apellido.campo,
            celula: celula.campo,
            correo: correo.campo,
            estadoEmpleado: estadoEmpleado,
            username: empleado.username,
            password: empleado.password,
            role: "empleado"
           
          };
          updateEmpleado(empleadoDTO);
        }
        
        resetForm();
        setEditando(false);
        toast.success("Se actualizo correctamente", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        
      } else {
        registrarEmpleado();
        resetForm();
        toast.success("Se registro correctamente", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.warn("Rellene los campos del formulario correctamente", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const resetForm = () =>{
    setNombre({ campo: "", valido: null });
    setApellido({ campo: "", valido: null });
    setCelula({ campo: "", valido: null });
    setCorreo({ campo: "", valido: null });
    setEstadoEmpleado("inactivo");
  };
  const registrarEmpleado = async () => {
    try {
      if (estadoEmpleado === "activo") {
        const empleadoDTO = {
          id: uuidv4().slice(0, 7),
          nombre: nombre.campo,
          apellido: apellido.campo,
          celula: celula.campo,
          correo: correo.campo,
          role: "empleado",
          username: generarUsername(),
          password: generarPassword(),
          estadoEmpleado: estadoEmpleado,
        };
        createEmpleado(empleadoDTO);
       
      } else {
        const empleadoDTO = {
          id: uuidv4().slice(0, 7),
          nombre: nombre.campo,
          apellido: apellido.campo,
          celula: celula.campo,
          correo: correo.campo,
          role: "empleado",
          estadoEmpleado: estadoEmpleado,
        };
        createEmpleado(empleadoDTO);
      }
    } catch (error) {
      toast.error("No se registro el empleado", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const onOptionChange = (e) => {
    setEstadoEmpleado(e.target.value);
  };
  const generarUsername = () => {
    const unique_id = uuidv4();
    const small_id = unique_id.slice(0, 3);
    return nombre.campo.split(" ")[0] + small_id;
  };
  const generarPassword = () => {
    var generator = require("generate-password");
    var passwordGenerated = generator.generate({
      length: 10,
      numbers: true,
    });
    return passwordGenerated;
  };
  return (
    <main>
      {editando ? (
        <Titulo>Editar empleado</Titulo>
      ) : (
        <Titulo>Registrar empleado</Titulo>
      )}
      <Formulario onSubmit={handleSubmit}>
        <InputValidate
          estado={nombre}
          cambiarEstado={setNombre}
          tipo="text"
          label="Nombres:"
          placeholder="Ingrese su nombre"
          name="usuario"
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

        <div>
          <input
            type="radio"
            name={estadoEmpleado}
            value="activo"
            checked={estadoEmpleado === "activo"}
            onChange={onOptionChange}
            id="activo"
          />
          <LabelRadio htmlFor="activo">Activo</LabelRadio>
          <input
            type="radio"
            name={estadoEmpleado}
            value="inactivo"
            checked={estadoEmpleado === "inactivo"}
            onChange={onOptionChange}
            id="inactivo"
          />
          <LabelRadio htmlFor="inactivo">Inactivo</LabelRadio>
        </div>
        <ContenedorBotonCentrado>
          {editando ? (
            <Boton type="submit">Editar</Boton>
          ) : (
            <Boton type="submit">Registrar</Boton>
          )}
        </ContenedorBotonCentrado>
        <ToastContainer />
      </Formulario>
    </main>
  );
};

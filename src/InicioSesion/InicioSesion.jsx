import React, {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Formulario,
  Input,
  ContenedorBoton,
  Boton,
  ContenedorFormulario,
  SubtituloAuxiliar,
  TextoAuxiliar
} from "../elementos/Formulario";
import { ContenedorHeader, Titulo, Header } from "../elementos/Header";
import { ReactComponent as SvgLogin } from "../imagenes/user.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useStore from "../store";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 100px;
  margin-bottom: 10px;
`;

export const InicioSesion = () => {
  const registerUsuario = useStore(state => state.registerUsuario);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [administrador, setAdministrador] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  useEffect(() => {
    getUsuarios();
    getAdministrador();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let estadoCuenta = false;
    usuarios.forEach((usuario) => {
    
      if (usuario.username === username && usuario.password === password) {
        estadoCuenta=true;
         localStorage.setItem("NOMBRE", usuario.nombre);
         localStorage.setItem("ROLE", usuario.role);
         registerUsuario(usuario);
          navigate("/empleado/inicio");
      }
    });
    if(administrador[0].username === username && administrador[0].password === password){
      localStorage.setItem("NOMBRE", administrador[0].nombre);
         localStorage.setItem("ROLE", administrador[0].role);
      registerUsuario(administrador);
      navigate("/admin/welcome");
    }else{
      mensajeCuentaInvalida(estadoCuenta);
    }
   

 
  };
const mensajeCuentaInvalida = (estadoCuenta) =>{
  if(!estadoCuenta){
    toast.error("Ingrese una cuenta valida", {
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
};
const getUsuarios = async () => {
  try {
    const response = await axios.get("/db.json");
    setUsuarios(response.data.empleado);
  } catch (error) {
    toast.error("No se puede acceder a la Base de datos", {
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
};

const getAdministrador = async () => {
  try {
    const response = await axios.get("/db.json");
    const administradores = response.data.administrador;
    setAdministrador(administradores);
  } catch (error) {
    toast.error("No existe un administrador en la BD", {
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
};

  return (
    <>
      <Helmet>
        <title>Iniciar Sesion</title>
      </Helmet>
      <ContenedorHeader>
        <Header>
          <Titulo>Iniciar Sesion</Titulo>
        </Header>
      </ContenedorHeader>

      <ContenedorFormulario>
        <Formulario onSubmit={handleSubmit}>
          <Svg />
          <Input
            type="input"
            name="username"
            placeholder="Ingrese Username"
            value={username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Ingrese Contraseña"
            value={password}
            onChange={handleChange}
          />
          <ContenedorBoton>
            <Boton type="submit">Iniciar Sesion</Boton>
          </ContenedorBoton>
          <SubtituloAuxiliar>Usuario administrador</SubtituloAuxiliar>
          <TextoAuxiliar>Username: admin</TextoAuxiliar>
          <TextoAuxiliar>Password : admin</TextoAuxiliar>
          <SubtituloAuxiliar>Usuario Empleado</SubtituloAuxiliar>
          <TextoAuxiliar>Username: Maria2a1</TextoAuxiliar>
          <TextoAuxiliar>Password : 0Qtwfj9Pod</TextoAuxiliar>
        </Formulario>
      </ContenedorFormulario>
      <ToastContainer />
    </>
  );
};

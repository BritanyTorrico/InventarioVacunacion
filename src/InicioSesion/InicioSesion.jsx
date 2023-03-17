import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Formulario,
  Input,
  ContenedorBoton,
  Boton,
  ContenedorFormulario,
} from "../elementos/Formulario";
import { ContenedorHeader, Titulo, Header } from "../elementos/Header";
import { ReactComponent as SvgLogin } from "../imagenes/user.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 100px;
  margin-bottom: 10px;
`;
export const InicioSesion = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  useEffect(() => {
    getUsuarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    usuarios.forEach((usuario) => {
     
      if (usuario.username === username && usuario.password === password) {
         localStorage.setItem("NOMBRE", usuario.nombre);
        if (usuario.role === "admin") {
          navigate("/admin/welcome");
        } else {
          navigate("/welcome");
        }
      }
    });
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
  };

  const getUsuarios = async () => {
    try {
      await axios.get("/empleado").then((response) => {
        setUsuarios(response.data);
      });
    } catch (error) {
      toast.error("Base de datos vacia", {
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
        </Formulario>
      </ContenedorFormulario>
      <ToastContainer />
    </>
  );
};

import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  valido: "#008000",
  invalido: "#8B0000",
  basico: "#000080"
};

const Label = styled.label`
  cursor: pointer;
  display: block;
  font-weight: 720;
  min-height: 40px;
  padding: 12px;
  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.invalido};
    `}
`;
const ContenedorInput = styled.div`
  position: relative;
  z-index: 90;
`;
const Input = styled.input`
  border: 3px solid transparent;
  background: #fff;
  border-radius: 9px;
  height: 45px;
  width: 100%;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;

  &:focus {
    border: 3px solid #0075ff;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    outline: none;
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.invalido} !important;
    `}
`;
const MensajeValidacion = styled.p`
  color: ${colores.invalido};
  display: none;
  font-size: 12px;
  margin-bottom: 0;
  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;


const IconoValidacion = styled(FontAwesomeIcon)`
  bottom: 14px;
  font-size: 16px;
  opacity: 0;
  position: absolute;
  right: 10px;
  z-index: 100;
  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.invalido};
    `}
  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.valido};
    `}
`;
const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	padding: 0 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;
const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;
const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;
const Titulo = styled.h1`
 font-size:32px;
 font-weight: 700;
 padding:20px;
 color:${colores.basico}

`;
const LabelRadio = styled.label`
 font-size:18px;
 font-weight: 700;
 padding:20px;

`;
export {
  Label,
  ContenedorInput,
  Input,
  MensajeValidacion,
  IconoValidacion,
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  Titulo,
  LabelRadio
};

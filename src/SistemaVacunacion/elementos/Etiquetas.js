import styled from "styled-components";

const LabelNormal = styled.label`
  font-size: 18px; 
  padding: 0 30px 0 10px;
`;

const TituloSecundario = styled.p`
  font-size: 22px; 
  font-weight: bold;
  padding:5px;
`;
const ContenedorBoton = styled.div`
display: flex;
justify-content: right;
padding-right:  10%;

`;
const ContenedorBotonBusqueda = styled.div`
margin-left:43%;
margin-bottom: 40px;

`;
const ContenedorDatos = styled.div`
margin:  20px 40px;
background-color:white;
width: 60%;

`;
const ContenedorCardPequenio = styled.div`
width: 50%;
margin-bottom: 40px;

`;
const ContenedorCard = styled.div`
display: flex;

    div {
    flex: 1;
    padding-top: 5px;
  }
  label{
    padding: 0.5em;
  }
  
 
`;


const NombrePropiedad = styled.label`
  font-size: 20px;
 width: 100%;
 padding: 5px 10px;
 border-bottom: 2px solid gray;
 
`;

export {
  
    ContenedorBoton,LabelNormal,NombrePropiedad,ContenedorDatos,ContenedorCard,
    ContenedorCardPequenio,TituloSecundario,ContenedorBotonBusqueda
  };
  
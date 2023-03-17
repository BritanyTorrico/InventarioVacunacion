import styled from "styled-components";
const ContenedorFormulario = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Formulario = styled.form`
  background: white;
  padding: 40px;
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  input {
    width: 100%;
    text-align: center;
    padding: 25px 0;
    font-family: "Work Sans", sans-serif;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 950px) {
    justify-content: start;
  }
`;
const Input = styled.input`
  font-size: 30px;
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  @media (max-width: 950px) {
    font-size: 20px;
  }
`;


const ContenedorBoton = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const Boton = styled.button`
  width: 250px;
  height: 50px;
  background: #000;
  color: #fff;
  border-radius: 7px;
  cursor: pointer;
  font-size: 22px;
`;
export {
  Formulario,
  Input,
  ContenedorBoton,
  Boton,
  ContenedorFormulario,
};

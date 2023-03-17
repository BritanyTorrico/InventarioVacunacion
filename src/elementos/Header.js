import styled from "styled-components";
 
const Titulo = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 40px; 
    @media(max-width: 60rem){ 
        font-size: 30px ; 
    }
`;
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
`;
const Header = styled.div`
width: 500px;
margin-top:20px;
padding:30px ;
display: flex;
justify-content: center;
align-items: center;
background: white;
`;


export { Titulo, ContenedorHeader,Header};
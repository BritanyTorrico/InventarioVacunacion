
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import useStore from "../store";
function NavBar() {
  const deleteUsuario = useStore(state => state.deleteUsuario);
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("NOMBRE");
    localStorage.removeItem("ROLE");
    deleteUsuario();
    localStorage.removeItem("user_seting");
   
    navigate("/");
  };

 const role= localStorage.getItem("ROLE");

  return (
    <Navbar bg="light" expand="lg">
        {role === "admin" && 
         <Container>
         <Navbar.Brand href="/admin/welcome">Sistema de Vacunacion</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
           <Nav.Link href="/admin/welcome">Inicio</Nav.Link>
             <Nav.Link href="/admin/registrar">Registrar Empleado</Nav.Link>
             <Nav.Link href="/admin/listar">Ver Empleados</Nav.Link>
           </Nav>
           <Nav>
             <button className="nav-item nav-link btn" onClick={onLogout}>
               Cerrar sesión
             </button>
           </Nav>
         </Navbar.Collapse>
       </Container>
        }
        {role === "empleado" &&
         <Container>
         <Navbar.Brand href="/empleado/inicio">Sistema de Vacunacion</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav >
             <Nav.Link href="/empleado/inicio">Inicio</Nav.Link>
           </Nav>
           <Nav className="me-auto">
             <Nav.Link href="/empleado/perfil">Ver Perfil</Nav.Link>
           </Nav>
           <Nav>
             <button className="nav-item nav-link btn" onClick={onLogout}>
               Cerrar sesión
             </button>
           </Nav>
         </Navbar.Collapse>
       </Container>
        }
     
    </Navbar>
  );
}

export default NavBar;

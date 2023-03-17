import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("NOMBRE");
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/admin/inicio">Sistema de Vacunacion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin/registrar">Registrar Empleado</Nav.Link>
            <Nav.Link href="/admin/listar">Ver Empleados</Nav.Link>
            <NavDropdown title="Empleados" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/registrar">
                Registrar Empleado
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/listar">
                Ver Empleado
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">sadsadasd</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <button className="nav-item nav-link btn" onClick={onLogout}>
              Cerrar sesión
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Tema from "../util/Mod";


export default function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-black shadow-sm mb-3">
      <Container>
        <Nav className="me-auto" style={{ fontSize: "1.2rem ", color: "blou" }}>
          <Nav.Link to="/Home" as={NavLink}>
            Quem somos
          </Nav.Link>
          
          <Nav.Link to="/Distancia" as={NavLink}>
          Comprimento
          </Nav.Link>
          
          <Nav.Link to="/Massa" as={NavLink}>
           Massa
          </Nav.Link>

          <Nav.Link to="/Temperatura" as={NavLink}>
            Temperature
          </Nav.Link>
        </Nav>
         <Tema />
      </Container>
    </NavbarBs>
  );
}

import {  Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="Home" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="Distancia" as={NavLink}>
            Distance Converter
          </Nav.Link>
          <Nav.Link to="Temperatura" as={NavLink}>
            Currency Converter
          </Nav.Link>
          <Nav.Link to="Peso" as={NavLink}>
            Weight Converter
           </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}



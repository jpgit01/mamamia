import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu() {
  const claseActive = ({ isActive }) =>
    isActive ? "nav-item nav-link active" : "nav-item nav-link";
  return (
    <Navbar expand="lg" className="menuCeleste" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/Home">
          <NavLink className={claseActive} to={"/Home"}>
            Pizzeria Mamma Mia!
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={claseActive} to={"/Home"}>
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLink className="carrito" to={"/Carrito"}>
          Carrito
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Menu;

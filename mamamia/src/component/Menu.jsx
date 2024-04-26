import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./menu.css";
import { MiContexto } from "../context/Contexto";

function Menu() {
  const claseActive = ({ isActive }) =>
    isActive ? "nav-item nav-link active" : "nav-item nav-link";

  const { totalPrecio } = useContext(MiContexto);
  const [precioCarrito, setPrecioCarrito] = useState(totalPrecio);

  useEffect(() => {
    setPrecioCarrito(totalPrecio);
  }, [totalPrecio]);

  return (
    <Navbar expand="lg" className="menuCeleste" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/Home">
          <NavLink className={claseActive} to={"/"}>
            Pizzeria Mamma Mia!
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={claseActive} to={"/"}>
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLink className="carrito" to={"/Carrito"}>
          Carrito ({precioCarrito})
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Menu;

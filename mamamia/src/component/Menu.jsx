import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./menu.css";
import { MiContexto } from "../context/Contexto";
import IconPizza from "../public/IconPizza";
import { Cart4} from 'react-bootstrap-icons';

function Menu() {
  const claseActive = ({ isActive }) =>
    isActive ? "nav-item nav-link active" : "nav-item nav-link";

  const { totalPrecio } = useContext(MiContexto);
  const [precioCarrito, setPrecioCarrito] = useState(totalPrecio);

  useEffect(() => {
    setPrecioCarrito(totalPrecio);
  }, [totalPrecio]);

  return (
    <Navbar expand="lg" className="menuRojo" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href={"/"}>
          <NavLink className={claseActive} to={"/"}>
          <IconPizza tama={50}/>  Pizzeria Mamma Mia! 
          </NavLink>
        </Navbar.Brand>
        <NavLink className="carrito" to={"/Carrito"}>
        <Cart4 color="white" size={20} /> {precioCarrito.toLocaleString('es-CL')}
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Menu;

import React, { useContext } from "react";
import { MiContexto } from "../context/Contexto";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

const Carrito = () => {
  const {
    productosSeleccionados,
    montosIndividuales,
    sumarCantidad,
    restarCantidad,
  } = useContext(MiContexto);

  return (
    <Container>
      <Row>
        Producto en el carrito:
        {productosSeleccionados.map((pizza, index)=>(
          <p key={index}>{pizza.name}</p>
        ))}
      </Row>
    </Container>
  );
};

export default Carrito;

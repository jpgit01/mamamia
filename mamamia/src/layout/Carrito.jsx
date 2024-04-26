import React, { useContext, useEffect } from "react";
import { MiContexto } from "../context/Contexto";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
import "./Carrito.css";

const Carrito = () => {
  const { productosSeleccionados, totalPrecio, ajustarCantidad } = useContext(MiContexto);

  useEffect(() => {
  }, [productosSeleccionados]);

  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-center">
          <h3 className="mt-2 mb-2">Productos en el carrito:</h3>
        </Col>
        
        <Table striped bordered hover>
          <tbody>
            {productosSeleccionados.map((producto, index) => (
              <tr key={index}>
                <td>
                  <Image className="minim" src={producto.img} />
                </td>
                <td>{producto.name}</td>
                <td>$ {producto.price}</td>
                <td>
                  <Button onClick={() => ajustarCantidad(index, 1)}>+</Button>
                  {producto.cantidad}
                  <Button onClick={() => ajustarCantidad(index, -1)}>-</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col className="text-center">
          <h4>Total: ${totalPrecio}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;

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
  const { productosSeleccionados, totalPrecio, ajustarCantidad } =
    useContext(MiContexto);

  useEffect(() => {}, [productosSeleccionados]);

  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-center">
          <h3 className="mt-2 mb-2">Productos en el carrito:</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {productosSeleccionados.map((producto, index) => (
            <Row key={index}>
              <div className="contenidob">
                <div className="contenido">
                  <Image className="minim" src={producto.img} />
                  <h5 className="text-capitalize ms-3"> {producto.name}</h5>
                </div>

                <div className=" contenido text-end">
                  <div><h5 className="me-3">$ {producto.price * producto.cantidad}</h5></div>
                  <div>
                    <Button
                      className="mr-5"
                      onClick={() => ajustarCantidad(index, 1)}
                    >
                      +
                    </Button>
                  </div>
                  <div className="m-3">
                    <h5>{producto.cantidad}</h5>
                  </div>
                  <div>
                    <Button
                      variant="danger"
                      onClick={() => ajustarCantidad(index, -1)}
                    >
                      -
                    </Button>
                  </div>
                </div>
              </div>
            </Row>
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h3>Total: ${totalPrecio}</h3>
          <Button variant="success">Ir a pagar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;

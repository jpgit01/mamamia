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
  const { productosSeleccionados, totalPrecio, calcPrecio} = useContext(MiContexto);


  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-center">
        <h3 className="mt-2 mb-2">Producto en el carrito:</h3>
        </Col>
        
        <Table striped bordered hover>
          <tbody>
            {productosSeleccionados.map((pizza, index) => (
              <tr key={index}>
                <td>
                  <Image className="minim" src={pizza.img} />
                </td>
                <td>{pizza.name}</td>
                <td>$ {pizza.price}</td>
                <td>
                  <div className="cantidad">
                    <Button type="submit" onClick={calcPrecio(1000)} className="tama" variant="primary">
                      <h3>+</h3>
                    </Button>
                    <h3 className="m-3">1</h3>
                    <Button className="tama"  variant="danger">
                      <h3>-</h3>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row>
{totalPrecio}
      </Row>
    </Container>
  );
};

export default Carrito;

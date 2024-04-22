import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { MiContexto } from "../context/Contexto";

const Pizza = () => {
  const { id } = useParams();
  const { datos } = useContext(MiContexto); 

  const pizza = datos.find((item) => item.id === parseInt(id));

  return (
    <Container>
      {pizza ? (
        <Row className="border mt-5">
          <Col xs={6} className="p-0">
            <img className="img-fluid" src={pizza.src} alt={pizza.nombre} />
          </Col>
          <Col className="p-3" xs={6}>
            <h2>{pizza.nombre}</h2>
            <p>{pizza.descripcion}</p>
          </Col>
        </Row>
      ) : (
        <Row>Pizza no encontrada</Row>
      )}
    </Container>
  );
};

export default Pizza;

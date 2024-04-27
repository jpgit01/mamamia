import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { MiContexto } from "../context/Contexto";
import "./Home.css";
import IconPizza from "../public/IconPizza";

const Pizza = () => {
  const { id } = useParams();
  const { datos, agregarProducto } = useContext(MiContexto);

  const pizza = datos.find((item) => item.id === id);
  const handleAgregarProducto = (producto) => {
    agregarProducto(producto);
  };

  return (
    <Container>
      {pizza ? (
        <>
          <Row className="border mt-5">
            <Col xs={6} className="p-0">
              <img className="img-fluid" src={pizza.img} alt={pizza.nombre} />
            </Col>
            <Col className="p-3" xs={6}>
              <Row>
                <Col>
                  <h2>{pizza.name}</h2>
                  <p>{pizza.desc}</p>
                  <h6>Ingredientes:</h6>
                  <ul>
                    {pizza.ingredients.map((ing, index) => (
                      <li key={index}>
                        <IconPizza tama={30} /> {ing}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="text-end">$ {pizza.price}</h3>
                </Col>
                <Col className="text-end">
                  <Button
                    onClick={() => handleAgregarProducto(pizza)}
                    variant="danger"
                  >
                    Añadir
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <Row>Pizza no encontrada</Row>
      )}
    </Container>
  );
};

export default Pizza;

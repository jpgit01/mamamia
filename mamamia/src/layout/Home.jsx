import React, { useContext } from "react";
import { MiContexto } from "../context/Contexto";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { datos, agregarProducto } = useContext(MiContexto);

  const handleClick = (id) => {
    navigate(`/Pizza/${id}`);
  };

  const handleAgregarProducto = (producto) => {
    agregarProducto(producto);
  };

  return (
    <Container>
      <Row>
        {datos.map((num, index) => (
          <Col className="col-md-3 mt-5" key={index}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={num.src} />
              <Card.Body>
                <Card.Title>
                  <h3>Napolitana {num.id}</h3>
                </Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item>
                    Ingredientes
                    <ul>
                      <li>id: {num.id}</li>
                      <li>nombre: {num.nombre}</li>
                      <li>descripcion: {num.descripcion}</li>
                      <li>4</li>
                    </ul>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer>
                <Row className="text-center mt-3 mb-3">
                  <h2>$5.000</h2>
                </Row>
                <Row>
                  <div className="text-center">
                    <Button onClick={() => handleClick(num.id)} variant="primary">Ver mas</Button>{" "}
                    <Button onClick={() => handleAgregarProducto(num)} variant="danger">Añadir</Button>{" "}
                  </div>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
import React, { useContext } from "react";
import { MiContexto } from "../context/Contexto";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import IconPizza from "../public/IconPizza";

const Home = () => {
  const navigate = useNavigate();
  const { datos, agregarProducto, productosSeleccionados } =
    useContext(MiContexto);

  const handleClick = (id) => {
    navigate(`/Pizza/${id}`);
  };

  const handleAgregarProducto = (producto) => {
    agregarProducto(producto);
    console.log(productosSeleccionados);
  };

  return (
    <>
      <Container fluid>
        <Row className="fondo">
          <Col className="text-center mt-5 text-light">
            <h1 className="shadow">¡Pizzería Mamma Mia!</h1>
            <h5>Tenemos las mejores pizzas que podrás encontrar</h5>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mb-5">
          {datos.map((num, index) => (
            <Col className="col-md-3 mt-5" key={index}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={num.img} />
                <Card.Body>
                  <Card.Title>
                    <h3 className="text-capitalize">{num.name}</h3>
                  </Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item>
                      <h6>Ingredientes:</h6>
                      <ul>
                        {num.ingredients.map((ing, index) => (
                          <li key={index}>
                            <IconPizza tama={30} /> {ing}
                          </li>
                        ))}
                      </ul>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Row className="text-center mt-3 mb-3">
                    <h2>$ {num.price.toLocaleString('es-CL')}</h2>
                  </Row>
                  <Row>
                    <div className="text-center">
                      <Button
                        onClick={() => handleClick(num.id)}
                        variant="primary"
                      >
                        Ver mas
                      </Button>{" "}
                      <Button
                        onClick={() => handleAgregarProducto(num)}
                        variant="danger"
                      >
                        Añadir
                      </Button>{" "}
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;

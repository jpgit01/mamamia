import React, { useContext, useState } from "react";
import { MiContexto } from "../context/Contexto";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

const Carrito = () => {
  const { productosSeleccionados, setProductosSeleccionados } =
    useContext(MiContexto);
  const [cantidades, setCantidades] = useState({});

  const [montosIndividuales, setMontosIndividuales] = useState({});

  const sumarCantidad = (id, monto) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: (prevCantidades[id] || 0) + 1,
    }));
    setMontosIndividuales((prevMontos) => ({
      ...prevMontos,
      [id]: (prevMontos[id] || 0) + monto,
    }));
  };

  const restarCantidad = (id, monto) => {
    if (cantidades[id] && cantidades[id] > 0) {
      setCantidades((prevCantidades) => ({
        ...prevCantidades,
        [id]: prevCantidades[id] - 1,
      }));
      setMontosIndividuales((prevMontos) => ({
        ...prevMontos,
        [id]: (prevMontos[id] || 0) - monto,
      }));
    }
  };
  
  return (
    <Container>
      <Row>
      <h2>Detalles del pedido</h2>
        <Table striped bordered hover>
          <tbody>
            {productosSeleccionados.map((producto) => (
              <tr key={producto.id}>
                <td>ID: {producto.id}</td>
                <td>Nombre: {producto.nombre}</td>
                <td>Descripción: {producto.descripcion}</td>
                <td>Monto: {producto.monto}</td>
                <td></td>
                <td>
                  Total: {montosIndividuales[producto.id] || producto.monto}
                </td>
                <td>
                  <Button
                    onClick={() => sumarCantidad(producto.id, producto.monto)}
                  >
                    +
                  </Button>
                  Cantidad: {cantidades[producto.id] || 1}
                  <Button
                    onClick={() => restarCantidad(producto.id, producto.monto)}
                  >
                    -
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Carrito;

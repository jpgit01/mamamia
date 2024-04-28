import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import NotFound from "./layout/NotFound";
import Menu from "./component/Menu";
import Carrito from "./layout/Carrito"
import Pizza from "./layout/Pizza"
import Pago from "./layout/Pago";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path={"/"} Component={Home} />
          <Route path={"/Pizza/:id"} Component={Pizza} />
          <Route path={"/Carrito"} Component={Carrito} />
          <Route path={"/Pago"} Component={Pago} />
          <Route path={"*"} Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

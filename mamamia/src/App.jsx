import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import NotFound from "./layout/NotFound";
import Menu from "./component/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path={"/Home"} Component={Home} />
          <Route path={"/pizza/:id:"} Component={Home} />
          <Route path={"*"} Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

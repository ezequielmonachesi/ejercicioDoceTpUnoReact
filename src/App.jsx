import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdministradorNoticias from "./components/AdministradorNoticias";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Container className="py-3 px-md-5 main">
        <Titulo></Titulo>
        <AdministradorNoticias></AdministradorNoticias>
      </Container>
      <footer className="py-4 bg-black text-light text-center">
        &copy; Todos los derechos reservados 2023.
      </footer>
    </>
  );
}

export default App;

import { Card, Form, Row, Col } from "react-bootstrap";
import RowCards from "./RowCards";
import { useState, useEffect } from "react";

const AdministradorNoticias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    if(categoriaSeleccionada && paisSeleccionado){
      consultarAPI(categoriaSeleccionada, paisSeleccionado);
    }
  }, [categoriaSeleccionada, paisSeleccionado]);

  const consultarAPI = async (categoria, pais) => {
    try {
      const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_240135ddcbf2e44d1a628028e9bb6a82d03a4&category=${categoria}&country=${pais}`);
      const informacion = await respuesta.json();
      console.log(respuesta);
      setNoticias(informacion.results);
      console.log(informacion.results);
      console.log(noticias);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="mt-4 shadow">
        <Card.Header className="pt-3">
          <Form>
            <Form.Group
              as={Row}
              className="mb-3 justify-content-center"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2" md="4">
                Buscar en un país:
              </Form.Label>
              <Col sm="10" md="6" className="px-2 px-md-4">
                <Form.Select
                  aria-label="categorías"
                  onChange={(e) => {
                    setPaisSeleccionado(e.target.value);
                  }}
                >
                  <option value="top">Selecciona una país</option>
                  <option value="ar">Argentina</option>
                  <option value="cl">Chile</option>
                  <option value="uy">Uruguay</option>
                </Form.Select>
              </Col>
              <Form.Label column sm="2" md="4">
                Buscar en una categoría:
              </Form.Label>
              <Col sm="10" md="6" className="px-2 px-md-4">
                <Form.Select
                  aria-label="categorías"
                  onChange={(e) => {
                    setCategoriaSeleccionada(e.target.value);
                  }}
                >
                  <option value="top">Selecciona una categoría</option>
                  <option value="science">Ciencia</option>
                  <option value="sports">Deportes</option>
                  <option value="top">General</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Card.Header>
        <Card.Body>
          <RowCards noticiasFiltradas={noticias}></RowCards>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdministradorNoticias;

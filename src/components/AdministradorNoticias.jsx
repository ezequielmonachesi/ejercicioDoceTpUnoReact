import { Card, Form, Row, Col } from "react-bootstrap";
import RowCards from "./RowCards";
import { useState, useEffect } from "react";

const AdministradorNoticias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, [categoriaSeleccionada]);

  const consultarAPI = async () => {
    try {
        const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_240135ddcbf2e44d1a628028e9bb6a82d03a4&q=ukraine");
        const informacion = await respuesta.json();
        console.log(respuesta);
        setNoticias(informacion.results);
        console.log(noticias);
        const nFiltradas = noticias.filter((e)=>e.category[0] === categoriaSeleccionada)
        setNoticiasFiltradas(nFiltradas);
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
                Search by category:
              </Form.Label>
              <Col sm="10" md="6" className="px-2 px-md-4">
                <Form.Select
                  aria-label="categorías"
                  onChange={(e) => {
                    setCategoriaSeleccionada(e.target.value);
                  }}
                >
                  <option value="all">select by category</option>
                  <option value="top">Mundial</option>
                  <option value="business">Business</option>
                  <option value="politics">Politics</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Card.Header>
        <Card.Body>
          <RowCards noticiasFiltradas={noticiasFiltradas}></RowCards>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdministradorNoticias;

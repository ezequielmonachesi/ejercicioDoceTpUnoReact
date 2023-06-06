import { Button, Card, Col } from "react-bootstrap";

const Cards = ({ objetoNoticia }) => {
  return (
    <Col md="5" lg="4">
      <Card className="shadow h-100">
        <Card.Img variant="top" src={objetoNoticia.image_url}></Card.Img>
        <Card.Body>
          <Card.Title>{objetoNoticia.title}</Card.Title>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="danger">Ver noticia completa</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Cards;

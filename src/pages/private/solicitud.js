import React, {useContext, useState} from 'react';
import {Navbar, Nav, Row, Container, Col, Card, Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {formatter} from './../../functions';
import {UserContext} from '../../context/UserContext';

export default function Solicitud() {
  const {user, logoutUser, descontar} = useContext(UserContext);
  const [credito, setCredito] = useState('');

  const solicitar = () => {
    if (credito <= user.credito && credito > 0){
      descontar(credito);
    } else {
      alert('Por favor, revise su solicitud');
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Bienvenido: {user.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to='/panel'>Inicio</Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link onClick={logoutUser}>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Crédito disponible</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Usted dispone de</Card.Subtitle>
                <Card.Text>
                  {formatter.format(user.credito)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Solicitar crédito</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">¿Qué cantidad requiere?</Card.Subtitle>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="number" placeholder="00.00" onChange={(e) => setCredito(e.target.value)} value={credito} />
                  </Form.Group>
                  <Button variant="primary" type="button" onClick={solicitar}>
                    Solicitar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

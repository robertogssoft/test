import React, {useContext} from 'react';
import {Navbar, Nav, Row, Container, Col, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {formatter} from './../../functions';
import {UserContext} from '../../context/UserContext';

export default function Panel() {
  let {user, logoutUser} = useContext(UserContext);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Bienvenido: {user.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
                <Card.Title>Saldo actual</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Usted dispone de</Card.Subtitle>
                <Card.Text>
                  {formatter.format(user.saldo)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Crédito disponible</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Usted dispone de</Card.Subtitle>
                <Card.Text>
                  <Link to="/solicitar">{formatter.format(user.credito)}</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

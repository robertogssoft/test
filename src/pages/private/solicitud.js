import React, {useContext, useState} from 'react';
import {Navbar, Nav, Row, Container, Col, Card, Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styles from './styles/login.module.css';
import {formatter} from './../../functions';
import {UserContext} from '../../context/UserContext';

export default function Solicitud() {
  const {user, logoutUser, descontar, cambiarEstatus, credito} = useContext(UserContext);
  const [monto, setMonto] = useState('');
  const [status, setStatus] = useState(true);

  const solicitar = () => {
    if (monto <= credito.monto && monto > 0){
      cambiarEstatus('en_proceso');
      estatus();
    } else {
      alert('Por favor, revise su solicitud');
    }
  };

  const estatus = () => {
    setTimeout(() => {
      if (status){
        descontar(monto);
        setStatus(false);
      } else {
        cambiarEstatus('cancelado');
        setStatus(true);
      }

      setMonto('');
    }, 3000);    
  }

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

      <Container className={styles.container}>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Crédito disponible</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Usted dispone de</Card.Subtitle>
                <Card.Text>
                  {formatter.format(credito.monto)}
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
                    <Form.Control type="number" placeholder="00.00" onChange={(e) => setMonto(e.target.value)} value={monto} />
                  </Form.Group>
                  <Button variant="primary" type="button" onClick={solicitar}>
                    Solicitar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Proceso</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{credito.estatus}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

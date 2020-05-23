import React, {useContext, useState} from 'react';
import {Card, Form, Button, Row} from 'react-bootstrap';
import styles from './styles/login.module.css';
import {Link} from "react-router-dom";
import {UserContext} from '../../context/UserContext';

export default function Login() {
  const {loginUser} = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  const log = () => {
    if (user && pass) {
      const us = {
        name: user,
        saldo: 2000,
        credito: 30000,
      }
      loginUser(us);
    } else {
      alert("Faltan datos");
    }
  };

  return (
    <div className={styles.container}>
      <Card>
        <Card.Body>
          <Row>
            <Link className={styles.end} to="/">Regresar</Link>
          </Row>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="User" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={log}>
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

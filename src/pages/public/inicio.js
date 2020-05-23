import React from 'react';
import { Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import { carrusel, cards, imagesCircle } from "../../components";

import LogoDefault from '../../assets/min-fghservice-512.png';
import HeaderSlider from '../../assets/HeaderSlider.png'
import Clientes from '../../assets/Clientes.png';

import styles from './styles/inicio.module.css';

const arrayCarrusel = [
  {
    img : HeaderSlider,
    title: "Crédito",
    description: "Obtén tu crédito ahora"
  },
  {
    img : HeaderSlider,
    title: "Crédito",
    description: "Obtén tu crédito ahora"
  },
  {
    img : HeaderSlider,
    title: "Crédito",
    description: "Obtén tu crédito ahora"
  }
];
const arrayCards = [
  {
    img: LogoDefault,
    title: "Crédito",
    description: "Obtén tu crédito ahora",
    btnText: "Ver más",
    btnLink: ""
  },
  {
    img: LogoDefault,
    title: "Crédito",
    description: "Obtén tu crédito ahora",
    btnText: "Ver más",
    btnLink: ""
  },
  {
    img: LogoDefault,
    title: "Crédito",
    description: "Obtén tu crédito ahora",
    btnText: "Ver más",
    btnLink: ""
  }
]
const arrayClientes = [
  {
    cn: "centrado",
    img: Clientes
  },
  {
    cn: "centrado",
    img: Clientes
  },
  {
    cn: "centrado",
    img: Clientes
  },
  {
    cn: "centrado",
    img: Clientes
  },
  {
    cn: "centrado",
    img: Clientes
  },
  {
    cn: "centrado",
    img: Clientes
  }
]

export default function Inicio() {
  return (
    <div>
      <Row >
        <Col>
          {
            carrusel(arrayCarrusel)
          }
        </Col>
      </Row>

      <Row className={[styles.padding3, styles.backgroundBlack]}>
        <Container>
          <Row>
            <Col className={styles.between} xs={4}>
              <a href="https://www.linkedin.com/" className={styles.white} rel="noopener noreferrer" target="_blank" variant="secondary">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/" className={styles.white} rel="noopener noreferrer" target="_blank" variant="secondary">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/" className={styles.white} rel="noopener noreferrer" target="_blank" variant="secondary">
                <FaInstagram />
              </a>
            </Col>

            <Col xs={8}>
              <ButtonToolbar className={styles.derecha}>
                <Link className={styles.padding5} to="/quienes-somos">¿Quienes somos?</Link>
                <Link className={styles.padding5} to="/productos" >Productos</Link>
                <Link className={styles.padding5} to="/contacto" >Contacto</Link>
                <Link className={styles.padding5} to="/login" >Iniciar sesión</Link>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </Row>

      <Container>
        {
          cards(arrayCards, styles.padding3)
        }

        <Row className={styles.padding3}>
          {
            imagesCircle(arrayClientes)
          }
        </Row>
      </Container>
    </div>
  );
}

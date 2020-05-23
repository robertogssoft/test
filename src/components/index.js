import React from 'react';
import { Carousel, Col, Row, Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function carrusel(arrayCarrusel) {
  return (
    <Carousel>
     {
       arrayCarrusel.map((props, i) => {
         return(
           <Carousel.Item key={i}>
             <img
               className="d-block w-100"
               src={props.img}
               alt="First slide"
             />
             <Carousel.Caption>
               <h3 className="black">{props.title}</h3>
               <p className="black">{props.description}</p>
             </Carousel.Caption>
           </Carousel.Item>
         )
       })
     }
    </Carousel>
  )
}

function cards(array, cn) {
  return(
    <Row className={cn}>
      {
        array.map((item, i) => {
          return(
            <Col key={i} xs={12} md={4}>
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text> {item.description} </Card.Text>
                  <Link to={item.btnLink}>{item.btnText}</Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })
      }
    </Row>
  )
}

function imagesCircle(array) {
  return(
    array.map((item, i)=>{
      return(
        <Col key={i} className={item.cn} xs={4} md={2} >
          <Image src={item.img} roundedCircle width="80" />
        </Col>
      )
    })
  )
}

export { carrusel, cards, imagesCircle };

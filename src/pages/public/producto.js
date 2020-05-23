import React from 'react';
import { carrusel } from "../../components";

import HeaderSlider from '../../assets/HeaderSlider.png'
import { Link } from 'react-router-dom';
const arrayCarrusel = [
{
    img : HeaderSlider,
    title: "Productos",
    description: "Obtén tu crédito ahora"
},
{
    img : HeaderSlider,
    title: "Productos",
    description: "Obtén tu crédito ahora"
},
{
    img : HeaderSlider,
    title: "Productos",
    description: "Obtén tu crédito ahora"
}
];

export default function Producto() {
    return (
        <div>
          {
            carrusel(arrayCarrusel)
          }
          <Link to="/">Regresar</Link>
        </div>
    );
}

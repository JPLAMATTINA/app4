import React from 'react';
import ReactDOM from 'react-dom';

// Listado de productos - Array de JSON con un key stock
const Productos = [{ producto: "Mouse", pesos: 1000, stock: true }, { producto: "teclado", pesos: 1500, stock: true }, { producto: "parlantes", pesos: 5500, stock: false }];

//Mostramos solo los productos que están en stock. Usamos filter para filtrar solo los que tienen stock true y usamos === para validar el tipo de dato (recomendado en este caso en React)
const Listado = () => Productos.filter(prod => prod.stock === true).map((prod, i) => (<li key={i}>{prod.producto} - Precio: ${prod.pesos}</li>))

const Cabecera = ()=>(
  <header>
    <h1>Hola Mundo</h1>
  </header>
)

const Home = () => (
  <div id="contenedor">
    <Cabecera/>
    <p>Soy el parrafo</p>
    <ol><Listado /></ol>
  </div>
)

ReactDOM.render( <Home />, document.getElementById("root") );
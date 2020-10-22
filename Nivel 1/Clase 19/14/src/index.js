import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Cabecera =()=> <header><h1>Titulo de la pagina</h1></header>

const Navbar =()=> {    
  const navjson = [{ text: "Inicio", link: "/home" }, { text: "Destacados", link: "/destacados" }, { text: "Favoritos", link: "/favs" }, { text: "Guardados", link: "/saves" }]
  const navegacion = navjson.map((item, i) => <li key={i}><a href={item.link}>{item.text}</a></li>)  
  return (
    <nav>
      <ul>
        {navegacion}
      </ul>
    </nav>
  )    

}

const Lista = () => {
  
  const datos = [{ producto: "Mouse", pesos: 1000, stock: true }, { producto: "Monitor", pesos: 12000, stock: false }, { producto: "Parlantes", pesos: 7000, stock: true }, { producto: "Teclado", pesos: 1400, stock: false }];

  const cotizacion = 85

  const listado = datos.map((prod, i) =>
      prod.stock === true ? <li key={i}> {prod.producto} U$D {(prod.pesos / cotizacion).toFixed(2)}</li> : null)
    
      return (
      <section>
        <ul>
          {listado}
        </ul>
        {/* 
            El datos.filter devuelve los elementos que están en stock y con length vemos la cantidad
        */}
        <p>Cantidad de productos en stock: {datos.filter(value => value.stock === true).length}</p>
      </section>
    )
}
const Home =() =>(
  <div id="contenedor">
    <Cabecera />
    <Navbar />
    <Lista />
  </div>
)  

ReactDOM.render(
<Home />, document.getElementById("root")
);
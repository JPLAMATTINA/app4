import React from 'react';
import ReactDOM from 'react-dom';



// ●	Usando React (sin hooks). Crear un JSON peliculas con la siguiente estructura 
//[{titulo:“Inception”,”poster:”inception.jpg”,year:”2010},...] crear un componente que muestre 
//las películas del año actual (el año obtenerlo con JavaScript). Al menos 5 peliculas

const App = () =>{
const films = [
  { film: "Inception", poster: "", year: "2010" },
  { film: "the dark night rise", poster: "b", year: "2012" },
  { film: "Mulán", poster: "", year: "2020" },
  { film: "1917", poster: "", year: "2020"},		
  { film: "Back to the Future", poster: "", year: "1985"},		
 
];

const date = new Date ();
const year = date.getFullYear();
const yearTwo = year.toString();
const watch =  films.filter (film => film.year === year ||  film.year === yearTwo).map((film, i) => <li key={i}>{film.film}{film.poster}</li>)

return (
  <div>
  <h1>las peliculas del 2020=</h1>
  <ul>{watch}</ul>
  </div>
)
}


ReactDOM.render(<App />,document.getElementById('root'));
//Version by Julio Mod by Dami
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Creamos un nuevo Hook que genera peliculas random
const useRandomMovie = () => {  
  // Creo una lista de peliculas en un array
  const peliculas = ["Volver al futuro", "El club de la pelea", "Dias de trueno"];

  const [pelicula, setearPelicula] = useState();

  const cambiarPelicula = () => {
    // Obtiene un número aleatorio de 0 al largo del array
    const index = Math.floor(Math.random() * peliculas.length);
    // Obtenemos la pelicula random del array con el índice rándom que obtuvimos arriba
    const peliculaElegida = peliculas[index];    
    setearPelicula(peliculaElegida);
  };
  return [pelicula, cambiarPelicula];
};

//Arranco con llaves un componente cuando comienzo con JS puro
const Peliculas = () => {    
  // Hook de estado
  const [pelicula, cambiarPelicula] = useRandomMovie();  
  //Agregado x Dami : generamos un arrow function Recomendada que verifica si el estado pelicula tiene un valor. Si tiene valor, es que se ejecutó al menos una vez la función cambiarPelicula que fue llamda x el onClick
  const Recomendada = () => pelicula ? <h2>Pelicula: {pelicula}</h2>:null
  //Uso return cuando arranque con llaves el componente  
  return (
    <div>
      <Recomendada/>
      <button onClick={cambiarPelicula}>Elegir pelicula!</button>
    </div>
  );
};

ReactDOM.render(<Peliculas />, document.getElementById('root'));
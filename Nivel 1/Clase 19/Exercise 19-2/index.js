import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// ●	Usando React y el Hook UseState. Al pulsar un botón que se muestre una pelicula random de un array.
//intentando crear un hook
const useRandomFilm = (initialFilm) => { 
  const films = ["Inception", "500 Days of Summer", "Dark Shadows", "Volver al Futuro", "John Wick", "john Wick 2"];	
  const [film, setFilm] = useState(initialFilm)
  const changeFilm = () => {
    const index = Math.floor(Math.random() * films.length);
    const chosenFilm = films[index];
    setFilm(chosenFilm);
  };
  return [film, changeFilm];
};


const GetFilm = () => {    
  const [film, changeFilm] = useRandomFilm();
  return (
      <div>
        <h2 style={{ color: "Black" }}>Pelicula: {film}</h2>
      <button onClick={changeFilm}> VER PELICULA</button>
      </div>
  );
};


ReactDOM.render(<GetFilm />,document.getElementById('root'));
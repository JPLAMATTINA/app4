import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Creamos un nuevo Hook que genera colores random
const useRandomColor = (initialColor) => {  
  // Creo una lista de colores en un array
  const colors = ["black", "navy", "brown", "olive","orange"];
  const [color, setColor] = useState(initialColor)
  const changeColor = () => {
    // Obtiene un número aleatorio de 0 a 4
    const index = Math.floor(Math.random() * colors.length);
    // Obtenemos el color random del array con el índice rándom que obtuvimos arriba
    const colorElegido = colors[index];
    // Seteamos el color random en la variable del Hook de ColoredBanner
    setColor(colorElegido);
  };
  return [color, changeColor];
};

//Arranco con llaves un componente cuando comienzo con JS puro
const ColoredBanner = () => {    
  // Hook de estado que arranca con el fondo blue
  const [color, changeColor] = useRandomColor("blue");
  //Uso return cuando arranque con llaves el componente
  return (
    <div style={{ textAlign: "center", padding: "20px 0", backgroundColor: color }} >
      <h2 style={{ color: "white" }}>Esto es una prueba y el color de fondo es: {color}</h2>
      <br />
      <button onClick={changeColor}>Cambiar color</button>
    </div>
  );
};

ReactDOM.render(<ColoredBanner />, document.getElementById('root'));

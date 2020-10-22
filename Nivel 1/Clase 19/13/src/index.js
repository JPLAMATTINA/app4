import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const backgroundc = "pink"

const App = () => {
    const [bcolor,setBackColor]=useState('navy');
    const [textColor,setTextColor]=useState('gold');
    const [tituloColor,setTituloColor]=useState('red');

  return (    
    <div className="App" style={{background:backgroundc}}>
      {/* 
          Estilos de json entre {} y de los Hooks de estado
      */}
      <h1 style={{color:tituloColor}}>Soy el título del Mundo mundialmente reconocido</h1>
      {/* 
          El onclick del boton cambia los estados y eso se refleja en los estilos de la pantalla
      */}      
      <button style={{background:bcolor,color:textColor}} onClick={()=>{setBackColor("green");setTextColor('white');setTituloColor("black")}}>Cambiar Color</button>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root')
);

/*
En JS puro
var bcolor = 'navy';
function setBackColor(nuevocolor){
  bcolor = nuevocolor;
  document.getElementById("boton").style.backgroundColor = bcolor;  
}
*/
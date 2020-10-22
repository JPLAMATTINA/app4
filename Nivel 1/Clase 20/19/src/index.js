//Versión by Julio  | Mod by Dami
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const Home =() => {  
  const [dados, Tirar] = useState([]);
  
  const Randomizar = () => {
    const dados = [];
    // Dado 1
    dados.push(Math.ceil(Math.random()*6));
    // Dado 2
    dados.push(Math.ceil(Math.random()*6));
    if (dados[0] > dados[1]){
      dados.push("Gano dado 1");
    }
    else if ( dados[1] > dados[0] ) {
      dados.push("Gano dado 2");
    }
    else {
      dados.push("Empate");
    }
    
    Tirar(dados);
  }

    function Resultado(){
      if(dados.length !== 0){
        return(
          <div>          
            <p>Dado 1: {dados[0]}</p>
            <p>Dado 2: {dados[1]}</p>
            <p>Ganador: {dados[2]}</p>
        </div>
        )        
      }
      else{
        return null;
      }
    }

      return (
        <>
        <div>
            <button onClick={(Randomizar)}>Random dados.</button>
        </div>
        <Resultado/>
        </>
      );
  
}

ReactDOM.render( <Home />, document.getElementById("root") );
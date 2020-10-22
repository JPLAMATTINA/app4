import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Basado en documentacion: https://es.reactjs.org/docs/hooks-intro.html

const Home =() => {  
  // Declaración del Hook de estado y el estado inicial
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 
          El botón tiene un evento onClick de React  llama a la "función" del hook de estado para incrementar en 1 el estado
       */}
      <button onClick={() => setCount(count + 1)}>
        Hacer Clic (vas {count} )
      </button>
    </div>
  );
}

ReactDOM.render( <Home />, document.getElementById("root") );

/*
Equivalente
En HTML
<p>You clicked <span id="contador"></span> times</p>
<button onclick="setCount()">Hacer Clic</button>
En el script
var count = 0
function setCount(){
  count = count +1
  document.getElementById("contador").innerHTML = count
}

*/
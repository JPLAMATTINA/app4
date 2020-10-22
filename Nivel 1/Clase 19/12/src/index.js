import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Hola tenés el en carrito: {count} elemento(s)
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
ReactDOM.render(<Contador />, document.getElementById('root'));
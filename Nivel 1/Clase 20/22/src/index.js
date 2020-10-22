import React from 'react';
import ReactDOM from 'react-dom';
//npm install node-sass --save
import './index.scss';

const Componente = ()=>
    (
      <>
        <nav>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
          </nav>
        <h1>Soy el título del mundo</h1>
        <p>Soy un parrafin.</p>
      </>
    );

ReactDOM.render(<Componente />, document.getElementById('root'));
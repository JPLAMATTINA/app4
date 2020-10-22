// npm install react-router-dom --save

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//Importamos React Router DOM
import { BrowserRouter } from 'react-router-dom'
import App from './App';


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
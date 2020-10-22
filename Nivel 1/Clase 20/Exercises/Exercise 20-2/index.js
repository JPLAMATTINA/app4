import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js'
import Nav from './nav.js'

const App = () => (
  <>
  <div>
   <Header/>
   <Nav />
  </div>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'));


// npm install @material-ui/core --save
import React from 'react';
import ReactDOM from 'react-dom';
import SimpleBreadcrumbs from './Breadcomb.js';
import SimpleMenu from './Menu.js';
import MiSelectGenial from './Select.js';
import './index.css';

const App = () => (
  <>  
    <h1>El título del Mundo</h1>
    <SimpleBreadcrumbs/>
    <SimpleMenu/>
    <MiSelectGenial item1="0" item2="20" item3="40" />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'));
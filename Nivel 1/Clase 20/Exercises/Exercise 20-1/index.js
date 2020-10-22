import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import './index.css'


// ●	Crear un generador de claves (React + Material UI + Hook de estado)
//○	El usuario tendrá un botón de Materia UI
//○	Las claves serán random alfanuméricas de 12 caracteres.
//○	Y se muestran en un párrafo.

const Pass = () => {  

const [password, getPassword] = useState();

const setPassword = () => {

const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2',
'3','4','5','6','7','8','9','-','%','$'];

//necesito un acumulador
const password = [];

for (let i=0; i <= 12; i++){
 password.push(keys[Math.ceil(Math.random()*keys.length)])
}
getPassword (password);
}

return (
        <>
        <main>
         <div id="botonera">
            <Button onClick={(setPassword)} id="boton" variant="contained" color="Primary">
              Get Key
            </Button>
        </div>
        <br/>

        <div id="texto">
        <p><strong>Password: </strong>{password}</p>
                
        </div>
        </main>
        </>  
)
}
ReactDOM.render(<Pass />,document.getElementById('root'));



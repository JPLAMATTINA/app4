import React from 'react';
import ReactDOM from 'react-dom';


      
const Titulo = (props) => (
  <h1>{props.titulo}</h1>
    )

const Header = () => (
  <Titulo titulo="América" />
)

const TituloDos = (props) => (
  <h1>{props.tituloDos}</h1>
)

const HeaderDos = () => (
  <TituloDos tituloDos="Europa" />
)

        
const Estructura = [
  {pais: "Argentina",capital:"Buenos Aires",continente: "América"},
  {pais: "Colombia",capital:"Bogotá",continente: "América"},
  {pais: "Alemania",capital:"Berlín",continente: "Europa"},
  {pais: "España",capital:"Madrid",continente: "Europa"},
]

const Listado = () => Estructura.filter(paises => paises.continente === "América").map((paises, i) => (<tr key={i}><td>{paises.pais}</td><td>{paises.capital}</td></tr>))

const PaisesAmerica = () => (
  <>
      <table border="1">
          <thead>
              <tr>
                  <th>
                      Pais
                  </th>
                  <th>
                      Ciudad
                  </th>
              </tr>
          </thead>
          <tbody>
              
                  <Listado/>
              
          </tbody>
      </table>
  </>
)

const ListadoDos = () => Estructura.filter(paises => paises.continente === "Europa").map((paises, i) => (<tr key={i}><td>{paises.pais}</td><td>{paises.capital}</td></tr>))


const PaisesEuropa = () => (
  <>
      <table border="1">
          <thead>
              <tr>
                  <th>
                      Pais
                  </th>
                  <th>
                      Ciudad
                  </th>
              </tr>
          </thead>
          <tbody>
              
                  <ListadoDos/>
              
          </tbody>
      </table>
  </>
)

     const App =() =>(
      <div id="contenedor">
        <Header />
        <PaisesAmerica />
        <HeaderDos />
        <PaisesEuropa />
      </div>
    )  

ReactDOM.render(<App />,document.getElementById('root'));
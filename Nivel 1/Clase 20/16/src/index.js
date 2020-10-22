import React from 'react';
import ReactDOM from 'react-dom';

const paises = [{pais:'Argentina',capital:'Buenos Aires',continente:'América'},
                {pais:'Hungría',capital:'Budapest',continente:'Europa'},
                {pais:'México',capital:'México DF',continente:'América'},
                {pais:'Perú',capital:'Lima',continente:'América'},
                {pais:'Ucrania',capital:'Kiev',continente:'Europa'},
                {pais:'Venezuela',capital:'Caracas',continente:'América'},
                {pais:'Japón',capital:'Tokio',continente:'Asia'},
                {pais:'Congo',capital:'Brazzaville',continente:'Africa'},
              ]

const PaisesAmerica = () => (paises.filter(pais=> pais.continente==='América').map((pais,i)=><tr key={i}><td>{pais.pais}</td><td>{pais.capital}</td></tr>))

const PaisesEuropa = () => (paises.filter(pais=> pais.continente==='Europa').map((pais,i)=><tr key={i}><td>{pais.pais}</td><td>{pais.capital}</td></tr>))

const PaisesAsia = () => (paises.filter(pais=> pais.continente==='Asia').map((pais,i)=><tr key={i}><td>{pais.pais}</td><td>{pais.capital}</td></tr>))

const PaisesAfrica = () => (paises.filter(pais=> pais.continente==='Africa').map((pais,i)=><tr key={i}><td>{pais.pais}</td><td>{pais.capital}</td></tr>))

const Tabla = (props) => <>
                            <h1>Los países de: <em>{props.titulo}</em></h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Pais</th>
                                        <th>Capital</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <props.lista />
                                </tbody>
                            </table>
                        </>

const App = () =>  <>
                        <Tabla titulo='América' lista={PaisesAmerica} />                           
                        <Tabla titulo='Europa' lista={PaisesEuropa} /> 
                        <Tabla titulo='Asia' lista={PaisesAsia} />                           
                        <Tabla titulo='África' lista={PaisesAfrica} />                           
                    </>                        


ReactDOM.render(<App />,document.getElementById('root'))
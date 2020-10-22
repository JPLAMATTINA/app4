//Versión by Eze | Mod by Dami
import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
  const peliculas = [
  {'titulo':'Inception','poster':'https://via.placeholder.com/150','year':'2010'},
  {'titulo':'Bloodshot','poster':'https://via.placeholder.com/149','year':'2020'},
  {'titulo':'Watchmen: los vigilantes','poster':'https://via.placeholder.com/151','year':'2009'},
  {'titulo':'Unbreakable Kimmy Schmidt: Kimmy vs. the Reverend','poster':'https://via.placeholder.com/152','year':2020},
  {'titulo':'Batman: el caballero de la noche asciende','poster':'https://via.placeholder.com/153','year':'2012'},
  {'titulo':'Guardians of the Galaxy Vol. 2','poster':'https://via.placeholder.com/155','year':'2017'},
  {'titulo':'El robo del siglo','poster':'https://via.placeholder.com/148','year':2020}
  ]
  const date = new Date()
  const year = parseInt(date.getFullYear())
  const consultadas = peliculas.filter(peli => parseInt(peli.year) === year).map((peli,i) => <li key={i}>{peli.titulo} ({peli.year})<br/><img src={peli.poster} alt={peli.titulo}/></li>)
  return(
    <div>
       <h1>Las Peliculas del 2020 son:</h1>
      <ul>{consultadas}</ul>
    </div>
  )
  }
  
  ReactDOM.render(<App />,document.getElementById('root'));
import React from 'react';
import { Switch, Route} from 'react-router';
import { NavLink,Link  } from 'react-router-dom';
import './App.css';


const navjson = [{ text: "Home", link: "/" }, { text: "Acerca De esta página", link: "/about" }, { text: "Otros", link: "/otros" }];

const Navbar = () => {
    return (
        <nav>
          <ul>
            {navjson.map((item, i) =><li key={i}><NavLink to={item.link} exact  activeClassName="activa">{item.text}</NavLink></li>)}
          </ul>
        </nav> 
      )
    }

    const App = () => {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Titulo del Mundo</h1>
            </header>
            <div id="multimedia">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/o0uzJEOBwNM?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video"></iframe>
            </div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/otros" component={Otros} />
              <Route path="*" component={Error404} />
            </Switch>
          </div>
        );  
    }

const Home = () => {
    return (
        <section>
        <h2>Esta es la parte principal de la Home</h2>
        </section>
    );
}    

const About = () => {
    return (
        <section>
        <h2>Esta es la parte principal de About</h2>
        <p><Link to="/">Ir a la home</Link></p>
        </section>
    );
}

    
const Otros = () => {
    return (
      <section>
        <h2>Esta es la parte principal de Otros temas</h2>
        <p><Link to="/">Ir a la home</Link></p>
      </section>
    );  
}

const Error404 = () => {
    return (
      <section>
        <h2>Página no encontrada</h2>     
        <p><Link to="/">Ir a la home</Link></p>   
      </section>
    );
  }

  export default App;
import React from 'react';
import './App.css';
import './componentes/Header/Header.css';
import './componentes/Header/Index';
import Header from "./componentes/Header/Index";
//import CardSerie from './componentes/card/CardIndex';
import './componentes/card/Card.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './pages/lancamentos/CLancamentos';
import Lancamentos from './pages/lancamentos/CLancamentos';
import Sobre from './pages/sobre/Sobre';
import './pages/sobre/Sobre.css';
import Busca from './pages/busca/busca.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavLink to="Lancamentos" className="nav-link">Lançamentos</NavLink>
        <NavLink to="Busca" className="nav-link" >Busca</NavLink>
        <NavLink to="Sobre" className="nav-link" >Sobre</NavLink>
        
        <Switch>
          <Route exact path="/" component={Lancamentos} />
          <Route path="/Sobre" component={Sobre} />
          <Route path="/Lancamentos" component={Lancamentos} />
          <Route path="/busca" component={Busca} />
        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;

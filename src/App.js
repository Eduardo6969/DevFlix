import React from 'react';
import './App.css';
import './componentes/Header/Header.css';
import './componentes/Header/Index';
import Header from "./componentes/Header/Index";
import CardSerie from './componentes/card/CardIndex';
import './componentes/card/Card.css';

function App() {
  return (
    <div className="App">
     <Header />
    <CardSerie/>
    </div>
  
  
  );
}

export default App;

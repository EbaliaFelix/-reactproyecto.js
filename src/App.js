import logo from './logo.svg';
import React from 'react';
import './App.css';


function Texto(nombre,ciclo){
  var presentación = (
  <div>
  <h2>
    Por una mejor educación - {nombre}</h2>
  <h3> {ciclo} -2024 B  </h3>
  </div>
  );
 return presentación;
}

function App() {
  var nombre = "Ciclo escolar";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Te damos la bienvenida al sitio ofical Esc. Pimaria General Juventino Espinoza 
        </p>
        {Texto(nombre,2023)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

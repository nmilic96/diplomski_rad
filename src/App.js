import React from 'react';
import './App.css';
import KlasnaKomponenta from './components /class_component';
import FunkcijskaKomponenta from './components /function_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diplomski rad</h1>
        <h2>Nikola Milić</h2>
      </header>
      <article>
        <KlasnaKomponenta />
        <FunkcijskaKomponenta />
      </article>
    </div>
  );
}

export default App;

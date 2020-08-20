import React from 'react';
import './App.css';
import KlasnaKomponenta from './components /class_component';
import FunkcijskaKomponenta from './components /function_component';
import KlasnaKomponentaLifeCycle from './components /class_component_lifecycle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diplomski rad</h1>
        <h2>Nikola Milić</h2>
      </header>
      <article>
        <section>
          <small>Osnovni primjeri komponenti</small>
          <KlasnaKomponenta />
          <FunkcijskaKomponenta />
        </section>
        <section>
          <small>Životni ciklus komponente</small>
          <KlasnaKomponentaLifeCycle />
        </section>
      </article>
    </div>
  );
}

export default App;

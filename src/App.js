import React from 'react';
import './App.css';
import KlasnaKomponenta from './components/basic_examples/class_component';
import FunkcijskaKomponenta from './components/basic_examples/function_component';
import KlasnaKomponentaLifeCycle from './components/basic_examples/class_component_lifecycle';
import NestedComponentExample from './components/basic_examples/nesting_example';
import FunctionComponentLifecycle from './components/basic_examples/function_component_lifecycle';
import InteractionExample from './components/basic_examples/interaction_example';
import ComplexData from './components/basic_examples/complex_data_examples/complex_data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diplomski rad</h1>
        <h2>Nikola Milić</h2>
      </header>
      <article>
        {/* Basic examples */}
        <section>
          <small>Osnovni primjeri komponenti</small>
          <KlasnaKomponenta value="Props klasne komponente" />
          <FunkcijskaKomponenta value="Props function komponente" />
        </section>
        {/* Nesting examples */}
        <section>
          <small>Osnovni primjeri podkomponenti</small>
          <NestedComponentExample value="Props 	 komponente" />
					<InteractionExample />
        </section>
        {/* Lifecylce examples */}
        <section>
          <small>Životni ciklus komponente</small>
          <KlasnaKomponentaLifeCycle value={"Props lifecycle class komponente"} />
          <FunctionComponentLifecycle value={"Props lifecycle class komponente"} />
        </section>
				<section>
          <small>Životni ciklus komponente</small>
          <ComplexData />
        </section>
      </article>
    </div>
  );
}

export default App;

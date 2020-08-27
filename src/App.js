import React, { useEffect } from 'react';
import './App.scss';
import data from './posts.json';
//import KlasnaKomponenta from './components/basic_examples/class_component';
//import FunkcijskaKomponenta from './components/basic_examples/function_component';
//import KlasnaKomponentaLifeCycle from './components/basic_examples/class_component_lifecycle';
//import NestedComponentExample from './components/basic_examples/nesting_example';
//import FunctionComponentLifecycle from './components/basic_examples/function_component_lifecycle';
//import InteractionExample from './components/basic_examples/interaction_example';
//import ComplexData from './components/main_example';
//import Fragments from './components/fragments'
//import Update from './components/should_component_update'
//import Immutability from './components/immutability'
//import Conditional from './components/conditional_rendering'

import MainExample from './components/main_example'

function App() {

  
  useEffect(() => {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Diplomski rad</h1>
        <h2>Nikola Milić</h2>
      </header>
      <article>
        <MainExample />
        {/* <section>
          <small>Osnovni primjeri komponenti</small>
          <KlasnaKomponenta value="Props klasne komponente" />
          <FunkcijskaKomponenta value="Props function komponente" />
        </section>
        <section>
          <small>Osnovni primjeri podkomponenti</small>
          <NestedComponentExample value="Props 	 komponente" />
					<InteractionExample />
        </section>
        <section>
          <small>Životni ciklus komponente</small>
          <KlasnaKomponentaLifeCycle value={"Props lifecycle class komponente"} />
          <FunctionComponentLifecycle value={"Props lifecycle class komponente"} />
        </section>
        <section>
          <small>React.Fragment</small>
					<Fragments />
        </section>
				<section>
          <small>shouldComponentUpdate primjer</small>
					<Update />
        </section>
        <section>
          <small>Immutabiltity</small>
					<Immutability />
        </section>
        <section>
          <small>Immutabiltity</small>
					<Immutability />
        </section>
				<section>
          <small>Kompleksni podaci</small>
          <ComplexData />
        </section> */}
      </article>
    </div>
  );
}

export default App;


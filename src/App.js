import React, { useEffect, useState } from 'react';
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

import MainExample from './components/main_example';

function App() {
	const [ localData, setLocalData ] = useState(data);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!localStorage.getItem('data')) {
			setLocalData(data);
		}
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Diplomski rad</h1>
				<h2>Nikola Milić</h2>
			</header>
			<MainExample localData={localData} />
		</div>
	);
}

export default App;

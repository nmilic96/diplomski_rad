import React, { useState } from 'react';
import PreventUpdateExample from './prevent_update_example';
import FunctionPreventUpdateExample from './function_prevent_update'
import { useRef } from 'react';
import PureComponentExample from './pure_component_example';

function Index() {
	const [inputValue, setInputValue] = useState({
		text: ''
	});
	const input = useRef();
	return (
		<div>
			<PreventUpdateExample value={inputValue.text} />
			<FunctionPreventUpdateExample value={inputValue.text} />
			<PureComponentExample value={inputValue.text} />
			<form onSubmit={(e) => {
				e.preventDefault();
				setInputValue({
					text: input.current.value
				});
			}}>
				<div>
					<input ref={input} placeholder={'Unesite vrijednost'} />
				</div>
				<button type="submit">Prihvati vrijednost</button>
			</form>
		</div>
	);
}

export default Index;

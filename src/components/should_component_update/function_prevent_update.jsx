import React from 'react'

function FunctionPreventUpdateExample(props) {
	return (
		<div>
			<div>
				vrijednost: {props.value}
			</div>
		</div>
	)
}

function areEqual(prevProps, nextProps) {
	return prevProps.value === nextProps.value
}

export default React.memo(FunctionPreventUpdateExample, areEqual) 

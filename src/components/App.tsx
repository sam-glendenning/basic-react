import React, { ReactElement } from "react";

/**
 * 
 * @param {string} name - the name to display
 * @returns {string} - the hello message
 */
export const label = (name : string) : string => {
	return `Hello, ${name}!`;
};

function App() : ReactElement {
	return (
		<div className="App">
			<h1>{label("Sam")}</h1>
			<p id="welcome">Welcome to my React app.</p>
		</div>
	);
}

export default App;

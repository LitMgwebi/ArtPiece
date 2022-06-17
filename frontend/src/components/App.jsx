import React, {Component} from "react";
import {render} from "react-dom";

const App = props => {
     return <p>Hi this is the App component</p>
}
export default App;
const appDiv = document.getElementById('app');
render(<App/>, appDiv)
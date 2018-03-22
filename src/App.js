import React, { Component } from "react";
import ReactDOM from "react-dom";
import Store from "./js/store/";

const App = () => {
  return (
    <div>
      <Store /> 
      <p>React here with store!</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App> </App>, document.getElementById("app"));

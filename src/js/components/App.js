// src/js/components/App.js


import React from "react";
import Form from "./Form";
import ItemList from "./ItemList";


const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <ItemList/>
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);


export default App;
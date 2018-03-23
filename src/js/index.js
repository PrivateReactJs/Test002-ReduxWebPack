import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.js";
import { addArticle } from "../js/actions/index";

import ItemList from "./fetch";

window.store = store;
window.addArticle = addArticle;

render(
  <Provider store={store}>
    <div>
    <ItemList/>
    <App></App>
    </div>
  </Provider>,
  document.getElementById("app")
);
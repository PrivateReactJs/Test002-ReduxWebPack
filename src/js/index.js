import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.js";
import { addArticle } from "../js/actions/index";


window.store = store;
window.addArticle = addArticle;

import configureStore from './store/configureStore';
const store = configureStore(); // You can also pass in an initialState here

render(
  <Provider store={store}>
    <div>
    <App></App>
    </div>
  </Provider>,
  document.getElementById("app")
);


console.log(`I'm a silly entry point: ` + new Date() );

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
window.iAmJavascriptES6();

//import App from "./App";
import style from "./main.css";
import index from "./js/index"



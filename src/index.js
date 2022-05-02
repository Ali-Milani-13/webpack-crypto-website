import "./styles/style.css";
import "./styles/input.styles.css";
import RadioBtn from "./components/RadioButtons.html";
import { getApiData } from "./functions/getApiData";
//importing all necessary components and styles
const radio = document.getElementsByTagName("input");
const frm = document.getElementById("input-frm");
const menu = document.querySelector(".menu-container");
//grabbing elements from DOM
frm.innerHTML += RadioBtn;
//injecting Radiobuttons.html to the index.html
const { clicked } = getApiData();
//destructuring custom function to access cliked function
for (const element of radio) {
  element.addEventListener("click", clicked);
}
//looping over radio buttons and adding event listener

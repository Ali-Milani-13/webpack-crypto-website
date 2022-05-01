import "./styles/style.css";
import "./styles/input.styles.css";
const radio = document.getElementsByTagName("input");
import RadioBtn from "./components/RadioButtons.html";
import { getApiData } from "./functions/getApiData";
const frm = document.getElementById("input-frm");
const menu = document.querySelector(".menu-container");
frm.innerHTML += RadioBtn;
const { clicked } = getApiData();
for (const element of radio) {
  element.addEventListener("click", clicked);
}

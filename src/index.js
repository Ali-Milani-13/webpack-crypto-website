import "./styles/style.css";
import "./styles/input.styles.css";
import RadioBtn from "./components/RadioButtons.html";
const frm = document.getElementById("input-frm");
frm.innerHTML += RadioBtn;

/* fetch("https://coinlib.io/api/v1/coin?key=56b27c4eeda50743&pref=EUR&symbol=BTC")
  .then((r) => r.json())
  .then((t) => console.log(JSON.stringify(Math.round(t.price))));
const frm = document.querySelector(".coin-frm");
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("submitted");
});
*/

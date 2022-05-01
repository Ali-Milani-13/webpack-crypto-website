import "./styles/style.css";
import "./styles/input.styles.css";
import RadioBtn from "./components/RadioButtons.html";
const frm = document.getElementById("input-frm");
const radio = document.getElementsByTagName("input");
const image = document.getElementById("currency-image");
const currencyName = document.getElementById("currency-name");
frm.innerHTML += RadioBtn;
const clicked = (e) => {
  console.log(e.target.value);
  switch (e.target.value) {
    case "BTC":
      image.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/5968/5968260.png"
      );
      currencyName.innerText = "Name : Bitcoin";
      break;
    case "ETH":
      currencyName.innerText = "Name : Ethereum";
      image.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/7016/7016523.png"
      );
      break;
    case "LTC":
      currencyName.innerText = "Name : Litecoin";
      image.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/1418/1418092.png"
      );
      break;
    case "XLM":
      currencyName.innerText = "Name : Stellar";
      image.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/6001/6001831.png"
      );
      break;
  }
  fetch(
    `https://coinlib.io/api/v1/coin?key=56b27c4eeda50743&pref=USD&symbol=${e.target.value}`
  )
    .then((r) => r.json())
    .then((t) =>
      console.log(JSON.stringify(parseFloat(parseFloat(t.price).toFixed(2))))
    );
};

for (const element of radio) {
  element.addEventListener("click", clicked);
}

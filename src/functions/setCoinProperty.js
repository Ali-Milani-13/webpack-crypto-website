const image = document.getElementById("currency-image");
const currencyName = document.getElementById("currency-name");
const currencySymbol = document.getElementById("currency-symbol");
const currencyPrice = document.getElementById("currency-price");
const currencyDelta = document.getElementById("currency-change");
export const setCoinProperty = () => {
  const setCoin = (source, name, symbol, price, delta) => {
    image.setAttribute("src", source);
    currencyName.innerText = `Name : ${name}`;
    currencySymbol.innerText = `Symbol : ${symbol}`;
    currencyPrice.innerText = `Price : ${price} $`;
    delta < 0
      ? (currencyDelta.style.color = "red")
      : (currencyDelta.style.color = "green");
    currencyDelta.innerText = ` ${delta}%`;
  };
  return { setCoin };
};

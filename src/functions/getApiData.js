import { setCoinProperty } from "./setCoinProperty";
import { makeAnimation } from "./makeAnimation";
//import necessary functions
const statusHolder = document.querySelector(".status-holder");
const image = document.getElementById("currency-image");
//grab image and information section of the coin
const { setCoin } = setCoinProperty();
const { animate } = makeAnimation();
//destructring to access functions
export const getApiData = () => {
  const clicked = (e) => {
    fetch(
      `https://coinlib.io/api/v1/coin?key=56b27c4eeda50743&pref=USD&symbol=${e.target.value}`
    )
      .then((r) => r.json())
      .then((t) => {
        const price = JSON.stringify(
          parseFloat(parseFloat(t.price).toFixed(2))
          //decimal number will be shorted to 1 digit and 2 decimal afer it
        );

        switch (e.target.value) {
          case "BTC":
            setCoin(
              "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
              "Bitcoin",
              "BTC",
              price,
              t.delta_24h //changes in 24 hours received from API
            );
            animate(); //animation function triggers on every click event
            break;
          case "ETH":
            setCoin(
              "https://cdn-icons-png.flaticon.com/512/7016/7016523.png",
              "Ethereum",
              "ETH",
              price,
              t.delta_24h
            );
            animate();
            break;
          case "LTC":
            setCoin(
              "https://cdn-icons-png.flaticon.com/512/1418/1418092.png",
              "Litecoin",
              "LTC",
              price,
              t.delta_24h
            );
            animate();
            break;
          case "XLM":
            setCoin(
              "https://cdn-icons-png.flaticon.com/512/6001/6001831.png",
              "Stellar",
              "XLM",
              price,
              t.delta_24h
            );
            animate();
            break;
        }
      });
  };
  return { clicked };
};

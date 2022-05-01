const image = document.getElementById("currency-image");
export const makeAnimation = () => {
  const animate = () => {
    image.style.transform = "rotate(45deg)";
    setTimeout(() => {
      image.style.transform = "rotate(0deg)";
    }, 500);
  };
  return { animate };
};

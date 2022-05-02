const image = document.getElementById("currency-image");
//grabbing image element
export const makeAnimation = () => {
  const animate = () => {
    image.style.transform = "rotate(45deg)";
    setTimeout(() => {
      image.style.transform = "rotate(0deg)";
    }, 500);
  };
  //function for animating rotation of the image
  return { animate };
  //returning function to make it accesible
};

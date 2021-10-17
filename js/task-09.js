function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const textColor = document.querySelector('.color');
const randomColor = document.querySelector('.change-color');

const onChangeColor = () => {
  const currentColor = getRandomHexColor();
  textColor.textContent = currentColor;
  body.style.backgroundColor = currentColor;
};
randomColor.addEventListener('click', onChangeColor);

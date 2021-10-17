function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const baseSize = 30;
    const biggestSize = baseSize + i * 10;
    const box = document.createElement('div');
    box.setAttribute('style', `width: ${biggestSize}px; height: ${biggestSize}px; background: ${getRandomHexColor()}`);
    boxes.append(box);
  }
}
const destroyBoxes = () => {
  boxes.innerHTML = '';
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);


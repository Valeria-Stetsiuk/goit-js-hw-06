const btnRandomColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btnRandomColor.addEventListener('click', onChangeBackground);
function onChangeBackground(evt) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}

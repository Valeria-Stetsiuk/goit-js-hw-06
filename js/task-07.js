const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSize.addEventListener('input', onInputSize);
function onInputSize() {
  const size = fontSize.value;
  text.style.fontSize = size + 'px';
}

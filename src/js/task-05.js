let input = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');
input.addEventListener('input', changeOutput);
//value - текст введений користувачем
function changeOutput() {
  if (input.value === '') {
    nameOutput.innerHTML = 'Anonymous';
  } else {
    nameOutput.innerHTML = input.value;
  }
}

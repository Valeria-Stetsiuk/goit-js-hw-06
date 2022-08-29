const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
input.addEventListener('input', changeOutput);

function changeOutput() {
  if (input.value === '') {
    nameOutput.innerHTML = 'Anonymous';
  } else {
    nameOutput.innerHTML = input.value;
  }
}

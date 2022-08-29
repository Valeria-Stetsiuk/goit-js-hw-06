const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
input.addEventListener('input', changeOutput);

function changeOutput() {
  if (input.value === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = input.value;
  }
}

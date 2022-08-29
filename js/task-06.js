const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(evt) {
  if (evt.target.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
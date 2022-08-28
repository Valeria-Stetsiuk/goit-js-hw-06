const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const mail = evt.currentTarget.elements.email.value;
  const password = evt.currentTarget.elements.password.value;

  const formData = {
    mail,
    password,
  };
  if (mail === '' || password === '') {
    alert(' ⚠ Попередження! Всі поля повинні бути заповнені! ⚠ ');
    return;
  }
  console.log(formData);
  loginForm.reset();
}

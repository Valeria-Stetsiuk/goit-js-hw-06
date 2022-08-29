let counterValue = 0;
const value = document.querySelector('#value');

const incrementBtn = document.querySelector("[data-action='increment']");
incrementBtn.addEventListener('click', function () {
  counterValue += 1;
  value.textContent = counterValue;
});

const decrementBtn = document.querySelector("[data-action='decrement']");
decrementBtn.addEventListener('click', function () {
  counterValue -= 1;
  value.textContent = counterValue;
});

const numberOfCategories = document.querySelector('#categories').children.length;

console.log(`Number of categories:${numberOfCategories}\n`);

const items = document.querySelectorAll('.item');
items.forEach(item => {
  const titleOfCategory = item.querySelector('h2').textContent;
  const text = item.querySelectorAll('li');
  const titleOfLength = text.length;
  console.log(`\nCategory: ${titleOfCategory}\nElements:${titleOfLength}\n`);
});

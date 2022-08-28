const numberOfCategories = document.querySelector('#categories').children.length;
// const titleOfCategory = document.querySelectorAll('h2');
console.log(`Number of categories:${numberOfCategories}\n`);

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});

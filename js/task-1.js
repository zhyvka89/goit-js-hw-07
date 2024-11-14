const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const categoryElemets = item.querySelectorAll('li');
  console.log(`Elements: ${categoryElemets.length}`);
})
// Отримуємо список категорій
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log('Number of categories:', categories.length);

// Обходимо кожну категорію
categories.forEach(category => {
  // Отримуємо заголовок категорії
  const categoryTitle = category.querySelector('h2').textContent;
  // Отримуємо кількість елементів у категорії
  const categoryItemsCount = category.querySelectorAll('ul li').length;

  // Виводимо заголовок і кількість елементів у категорії
  console.log('Category:', categoryTitle);
  console.log('Elements:', categoryItemsCount);
});

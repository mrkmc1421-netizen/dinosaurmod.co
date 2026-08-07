function addOptionToCategory(categoryId, option) {
  const grid = document.getElementById(categoryId);
  grid.appendChild(createOptionCard(option));
}

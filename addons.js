function createOptionCard(option) {
  const card = document.createElement("div");
  card.className = "option-card";

  card.innerHTML = `
    <h3>${option.name}</h3>
    <p>${option.desc}</p>
    <label class="switch">
      <input type="checkbox" id="${option.id}">
      <span class="slider"></span>
    </label>
  `;

  card.querySelector("input").onchange = () => {
    option.apply(card.querySelector("input").checked);
  };

  return card;
}

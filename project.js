function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img class="thumbnail" src="${project.thumbnail}">
    <h3 class="title">${project.title}</h3>
    <p class="author">By ${project.author}</p>
    <p class="tags">${project.tags.join(", ")}</p>
    <button class="open-btn">Open</button>
    <button class="remix-btn">Remix</button>
  `;

  card.querySelector(".open-btn").onclick = () => openProject(project.projectId);
  card.querySelector(".remix-btn").onclick = () => remixProject(project.projectId);

  return card;
    }

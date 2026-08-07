function loadSection(sectionId, projects) {
  const grid = document.getElementById(sectionId);
  grid.innerHTML = "";

  projects.forEach(project => {
    const card = createProjectCard(project);
    grid.appendChild(card);
  });
}
loadSection("trex-grid", dinosaurData.sections.trex);

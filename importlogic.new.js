function importRoar(file) {
  const reader = new FileReader();

  reader.onload = () => {
    const text = reader.result;
    const roarData = JSON.parse(text);

    // Extract Scratch project JSON
    const project = roarData.project;

    // Apply Dino metadata
    applyRoarMetadata(roarData);

    loadScratchProject(project);
  };

  reader.readAsText(file);
}
function applyRoarMetadata(roarData) {
  if (roarData.theme) {
    setDinoTheme(roarData.theme);
  }

  if (roarData.metadata?.section) {
    addProjectToSection(roarData.metadata.section, roarData);
  }

  if (roarData.metadata?.badges) {
    displayProjectBadges(roarData.metadata.badges);
  }
}

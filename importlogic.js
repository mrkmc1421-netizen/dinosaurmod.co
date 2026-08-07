function importSB3(file) {
  const reader = new FileReader();

  reader.onload = async () => {
    const arrayBuffer = reader.result;

    // SB3 is a ZIP file
    const zip = await JSZip.loadAsync(arrayBuffer);

    // project.json is the main Scratch project file
    const projectJson = await zip.file("project.json").async("string");
    const project = JSON.parse(projectJson);

    loadScratchProject(project);
  };

  reader.readAsArrayBuffer(file);
{
  "dinoVersion": "1.0",
  "theme": "trex",
  "project": { ... Scratch project JSON ... },
  "metadata": {
    "badges": ["Jurassic", "Volcano", "Boss 💥🦧"],
    "section": "trex"
  }
  }                                       }

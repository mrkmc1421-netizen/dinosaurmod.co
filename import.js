document.getElementById("importBtn").onclick = () => {
  const file = document.getElementById("projectImport").files[0];
  if (!file) return alert("No file selected!");

  const ext = file.name.split(".").pop().toLowerCase();

  if (ext === "sb3") {
    importSB3(file);
  } else if (ext === "roar") {
    importRoar(file);
  } else {
    alert("Unsupported file type! cannot import your project.");
  }
};

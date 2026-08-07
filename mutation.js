const DinoTurbo = {
  id: "dinoTurbo",
  name: "DinoTurbo Mode",
  desc: "Run scripts at prehistoric speed. 🦖",
  apply(enabled) {
    vm.runtime.setTurboMode(enabled);
    vm.runtime.frameLoop.fps = enabled ? 240 : 60;
  }
};

window.DinoEmotes = [
  { code: ":trex_roar:", src: "assets/emotes/trex_roar.png" },
  { code: ":volcano_hype:", src: "assets/emotes/volcano_hype.png" },
  { code: ":dino_love:", src: "assets/emotes/dino_love.png" },
  { code: ":fossil_ok:", src: "assets/emotes/fossil_ok.png" },
  { code: ":raptor_speed:", src: "assets/emotes/raptor_speed.png" },
  { code: ":jurassic_pride:", src: "assets/emotes/jurassic_pride.png" },
  { code: ":meteor_hype:", src: "assets/emotes/meteor_hype.png" }
];
function renderDinoEmotes(text) {
  let output = text;
  DinoEmotes.forEach(emote => {
    output = output.replaceAll(
      emote.code,
      `<img src="${emote.src}" class="dino-emote">`
    );
  });
  return output;
  }

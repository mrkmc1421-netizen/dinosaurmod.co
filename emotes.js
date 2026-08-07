window.DinoEmotes = [
  { code: ":trex_roar:", src: "assets/emotes/trex_roar.png" },
  { code: ":volcano_hype:", src: "assets/emotes/volcano_hype.png" },
  { code: ":dino_love:", src: "assets/emotes/dino_love.png" },
  { code: ":fossil_ok:", src: "assets/emotes/fossil_ok.png" },
  { code: ":raptor_speed:", src: "assets/emotes/raptor_speed.png" },
  { code: ":jurassic_pride:", src: "assets/emotes/jurassic_pride.png" },
  { code: ":meteor_hype:", src: "assets/emotes/meteor_hype.png" }
];
  // More Emotes Here!!!
  { code: ":dino_cry:", src: "assets/emotes/dino_cry.png" },
  { code: ":dino_laugh:", src: "assets/emotes/dino_laugh.png" },
  { code: ":dino_angry:", src: "assets/emotes/dino_angry.png" },
  { code: ":dino_confused:", src: "assets/emotes/dino_confused.png" },
  { code: ":dino_down:", src: "assets/emotes/dino_down.png" },
  { code: ":dino_sleep:", src: "assets/emotes/dino_sleep.png" },
  { code: ":dino_bruh:", src: "assets/emotes/dino_bruh.png" },
  { code: ":dino_wtf:", src: "assets/emotes/dino_wtf.png" },
  { code: ":dino_hype_overload:", src: "assets/emotes/dino_hype_overload.png" }
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

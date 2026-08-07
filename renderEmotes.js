function renderDinoEmotes(text) {
  let output = text;

  window.DinoEmotes.forEach(emote => {
    const imgTag = `<img src="${emote.src}" class="dino-emote">`;
    output = output.replaceAll(emote.code, imgTag);
  });

  return output;
                            }
function applyEmotesToElement(el) {
  el.innerHTML = renderDinoEmotes(el.innerHTML);
                              }

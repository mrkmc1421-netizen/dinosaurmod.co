function sendChatMessage(text) {
  const chat = document.getElementById("chatBox");
  const msg = document.createElement("div");

  msg.className = "chat-message";
  msg.innerHTML = renderDinoEmotes(text);

  chat.appendChild(msg);
}

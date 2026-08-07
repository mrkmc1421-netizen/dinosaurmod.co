function createThread(categoryId, title, author) {
  DinoThreads[categoryId].push({
    id: Date.now(),
    title,
    author,
    posts: []
  });
}
function loadThreads(categoryId) {
  const container = document.getElementById("forum-threads");
  container.innerHTML = "";

  DinoThreads[categoryId].forEach(thread => {
    const div = document.createElement("div");
    div.className = "forum-thread";
    div.innerText = thread.title + " — by " + thread.author;
    div.onclick = () => loadPosts(categoryId, thread.id);
    container.appendChild(div);
  });
                                  }

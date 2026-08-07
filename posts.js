function createPost(categoryId, threadId, author, content) {
  const thread = DinoThreads[categoryId].find(t => t.id === threadId);
  thread.posts.push({
    author,
    content: renderDinoEmotes(content),
    timestamp: new Date().toLocaleString()
  });
    }
function loadPosts(categoryId, threadId) {
  const container = document.getElementById("forum-posts");
  container.innerHTML = "";

  const thread = DinoThreads[categoryId].find(t => t.id === threadId);

  thread.posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "forum-post";
    div.innerHTML = `
      <strong>${post.author}</strong> <em>${post.timestamp}</em>
      <p>${post.content}</p>
    `;
    container.appendChild(div);
  });
                    }

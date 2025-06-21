const container = document.getElementById("messageContainer");

// 🔹 Fetch saved section messages
const allMessages = JSON.parse(localStorage.getItem("messages")) || {};
const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

if (Object.keys(allMessages).length === 0 && suggestions.length === 0) {
  container.innerHTML = "<p>No messages or suggestions found.</p>";
} else {
  // 🔸 Show section messages
  for (let section in allMessages) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section-block";

    const title = document.createElement("h2");
    title.textContent = `# ${section}`;
    sectionDiv.appendChild(title);

    allMessages[section].forEach(msg => {
      const msgDiv = document.createElement("div");
      msgDiv.className = "message";
      msgDiv.textContent = msg;
      sectionDiv.appendChild(msgDiv);
    });

    container.appendChild(sectionDiv);
  }

  // 🔸 Show Suggestions (if any)
  if (suggestions.length > 0) {
    const suggestionBlock = document.createElement("div");
    suggestionBlock.className = "section-block";

    const heading = document.createElement("h2");
    heading.textContent = "💡 Suggestions";
    suggestionBlock.appendChild(heading);

    suggestions.forEach(msg => {
      const msgDiv = document.createElement("div");
      msgDiv.className = "message";
      msgDiv.textContent = msg;
      suggestionBlock.appendChild(msgDiv);
    });

    container.appendChild(suggestionBlock);
  }
}
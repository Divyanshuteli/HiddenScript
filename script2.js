function toggleDrawer() {
  const drawer = document.getElementById("leftDrawer");
  drawer.classList.toggle("open");
}

function openProfile() {
  document.getElementById("profileSection").classList.add("open");
}

function closeProfile() {
  document.getElementById("profileSection").classList.remove("open");
}

function submitConfession() {
  const input = document.getElementById("confessionText");
  const text = input.value.trim();

  if (text === "") {
    alert("Please write something!");
    return;
  }

  let messages = JSON.parse(localStorage.getItem("confessionMessages")) || [];
  messages.push(text);
  localStorage.setItem("confessionMessages", JSON.stringify(messages));

  input.value = "";
  showMessages();
}

function showMessages() {
  const box = document.getElementById("allMessages");
  const messages = JSON.parse(localStorage.getItem("confessionMessages")) || [];

  box.innerHTML = "";

  if (messages.length === 0) {
    box.innerHTML = "<p>No messages yet.</p>";
    return;
  }

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message-box");
    div.textContent = msg;
    box.appendChild(div);
  });
}

function submitSuggestion() {
  const input = document.getElementById("suggestionInput");
  const suggestion = input.value.trim();
  if (suggestion === "") {
    alert("Please write a suggestion first!");
    return;
  }

  let suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
  suggestions.push(suggestion);
  localStorage.setItem("suggestions", JSON.stringify(suggestions));

  input.value = "";
  showSuggestions();
}

function showSuggestions() {
  const suggestionList = document.getElementById("suggestionList");
  const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

  suggestionList.innerHTML = "";
  suggestions.forEach(text => {
    const div = document.createElement("div");
    div.textContent = text;
    div.classList.add("message-box");
    suggestionList.appendChild(div);
  });
}

// Load all on page ready
window.onload = function () {
  showMessages();
  showSuggestions();
};
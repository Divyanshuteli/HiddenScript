// Get section name from URL
const urlParams = new URLSearchParams(window.location.search);
const sectionName = urlParams.get("name") || "default";

// Set section title
document.getElementById("sectionTitle").innerText = sectionName.toUpperCase();

// Load previous messages
const messagesContainer = document.getElementById("messages");
let messages = JSON.parse(localStorage.getItem("messages_" + sectionName)) || [];

// Display messages
function displayMessages() {
  messagesContainer.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message";
    div.innerText = msg;
    messagesContainer.appendChild(div);
  });
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Send message and save to localStorage
function sendMessage() {
  const input = document.getElementById("messageInput");
  const msg = input.value.trim();
  if (msg) {
    messages.push(msg);
    localStorage.setItem("messages_" + sectionName, JSON.stringify(messages));
    input.value = "";
    displayMessages();
  }
}

// Back button function
function goBack() {
  window.location.href = "skip.html"; // Change this to your homepage if needed
}

// Initial render
displayMessages();
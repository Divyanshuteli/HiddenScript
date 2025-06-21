// 🔐 Handle Login
function handleLogin(event) {
  event.preventDefault();

  var email = document.getElementById("email").value.trim();
  var pass = document.getElementById("password").value.trim();
  var msg = document.getElementById("login-msg");

  if (email === "divyanshuteli@gmail.com" && pass === "Divyanshu$#$)(0_") {
    localStorage.setItem("role", "owner");
    window.location.href = "admin.html";
  } else {
    msg.innerText = "Invalid credentials";
  }
}

// 🙋‍♂️ Skip Login (member role)
function skipLogin() {
  localStorage.setItem("role", "member");
  window.location.href = "skip.html";
}

// 👤 Profile Open
function openProfile() {
  document.getElementById("profileSection").classList.add("open");
}

// ❌ Profile Close
function closeProfile() {
  document.getElementById("profileSection").classList.remove("open");
}
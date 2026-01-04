// LOGIN
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("اكتب Username و Password");
    return;
  }

  localStorage.setItem("user", user);
  document.getElementById("login").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  playVideos();
}

// AUTO LOGIN
if (localStorage.getItem("user")) {
  document.getElementById("login").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
  playVideos();
}

// PLAY VIDEOS
function playVideos() {
  document.querySelectorAll("video").forEach(v => v.play());
}

// LIKE
function like(btn) {
  let span = btn.querySelector("span");
  span.innerText = parseInt(span.innerText) + 1;
}

